import sql from 'better-sqlite3';

const db = sql('meals.db');


export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return db.prepare('SELECT * FROM meals').all();
}


export async function getMealById(id) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return db.prepare('SELECT * FROM meals WHERE id = ?').get(id);

}