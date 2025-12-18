import { getMealById } from '@/lib/meals';
import styles from './page.module.css';
import Image from 'next/image';
import { notFound } from 'next/navigation';


export default async function SpecificMealPage({ params }) {

    const meal = await getMealById(params.id)

    meal.instructions = meal.instructions.replace(/\n/g, '<br/>');
    if (!meal) {
        return notFound();
    }

    return (
        <>
            <header className={styles.header}>
                <div className={styles.image}>
                    <Image
                        fill
                        src={`https://wilton-nextjs-demo-users-image.s3.us-east-1.amazonaws.com/${meal.image}`}
                        alt={meal.title}
                        className={styles.img}
                    />
                </div>
                <div className={styles.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={styles.creator}>
                        by <a href={`mailto: ${meal.creator_email}`}>{meal.creator}</a>
                    </p>
                </div>
            </header>
            <main>
                <p
                    className={styles.instructions}
                    dangerouslySetInnerHTML={{ __html: meal.instructions }}
                />
            </main>
        </>
    )
}