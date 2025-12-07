export default function SpecificMealPage({ params }) {
    const { id } = params;
    return (
        <div>
            <h1>Specific Meal Page for: {id}</h1>
        </div>
    )
}