import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'fs';

const db = sql('meals.db');


export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return db.prepare('SELECT * FROM meals').all();
};


export async function getMealById(slug) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
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
    meal.image = `/images/${imageFileName}`;

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