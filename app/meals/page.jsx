import MealsGrid from "@/components/meals/meals.grid";
import classes from "./page.module.css";
import NavLink from "@/components/UI/NavLink";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";


export const metadata = {
    title: 'All Meals',
    description: 'Delicious meals, shared by a food-loving community.',
};

async function Meals() {
    const meals = await getMeals();
    return <MealsGrid meals={meals} />
}


export default async function MealsPage() {

    const meals = await getMeals();

    return (
        <>
            <header className={classes.header}>
                <h1>Delicious Meals, createed {' '}</h1>
                <span className={classes.highlight}>just for you</span>
                <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
                <p className={classes.cta}>
                    <NavLink pathName="/meals/share" message="Share your favorite Recipe" />
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>Loading meals...</p>}>
                    <Meals />
                </Suspense>
            </main>
        </>
    )
}