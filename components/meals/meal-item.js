import Link from 'next/link';
import Image from 'next/image';

import classes from './meal-item.module.css';

export default function MealItem({ title, slug, image, summary, creator }) {

    console.log('MealItem image:', image);

    return (
        <article className={classes.meal}>
            <header>
                <div className={classes.image}>
                    <Image src={`https://wilton-nextjs-demo-users-image.s3.us-east-1.amazonaws.com/${image}`} alt={title} fill />
                </div>
                <div className={classes.headerText}>
                    <h2>{title}</h2>
                    <p>by {creator}</p>
                </div>
            </header>
            <div className={classes.content}>
                <p className={classes.summary}>{summary}</p>
                <div className={classes.actions}>
                    <Link href={`/meals/${slug}`}>View Details</Link>
                </div>
            </div>
        </article>
    );
}