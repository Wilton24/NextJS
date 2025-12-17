'use client';
import { useFormStatus } from "react-dom";

export default function MealsFormSubmit({ isPending }) {
    // const { pending } = useFormStatus();
    return (
        <button type="submit" disabled={isPending}>
            {isPending ? 'Sharing Meal...' : 'Share Meal'}
        </button>
    );
}
