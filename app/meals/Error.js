'use client';

export default function Error({ error, reset }) {
    return <main className="error">
        <h1>An Error Occured!</h1>
        <p>Failed to load meals. Please try again later.</p>
    </main>
}