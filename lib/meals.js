import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'fs';
import { S3 } from '@aws-sdk/client-s3';

const s3 = new S3({
    region: 'us-east-1',
    // credentials: {
    //     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    //     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    // }
});

const db = sql('meals.db');


export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return db.prepare('SELECT * FROM meals').all();
};


export async function getMealById(slug) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
};


export async function saveMeal(meal) {
    meal.slug = slugify(meal.title, { lower: true, strict: true });
    meal.instructions = xss(meal.instructions);

    const extension = meal.image.name.split('.').pop();
    const imageFileName = `${meal.slug}.${extension}`;
    const stream = fs.createWriteStream(`public/images/${imageFileName}`);
    const bufferedImage = await meal.image.arrayBuffer();
    stream.write(Buffer.from(bufferedImage), (err) => {
        if (err) {
            throw new Error('Failed to save image.');
        }
    });
    // stream.end();
    meal.image = imageFileName;

    s3.putObject({
        Bucket: 'wilton-nextjs-demo-users-image',
        Key: imageFileName,
        Body: Buffer.from(bufferedImage),
        ContentType: meal.image.type,
    });

    db.prepare(`INSERT INTO meals
        (title, summary, instructions, image, creator, creator_email, slug)
        VALUES (?, ?, ?, ?, ?, ?, ?)`).run(
        meal.title,
        meal.summary,
        meal.instructions,
        meal.image,
        meal.creator,
        meal.creator_email,
        meal.slug
    );
};