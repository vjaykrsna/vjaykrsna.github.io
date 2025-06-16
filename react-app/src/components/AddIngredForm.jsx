import { useState } from "react";

export default function AddIngredForm({ handleSubmit, ingredients }) {
    const [input, setInput] = useState("");
    const [error, setError] = useState(null);

    function handleFormSubmit(event) {
        event.preventDefault();
        setError(null); // Clear previous errors

        if (input.trim() === "") {
            setError("Please enter an ingredient.");
            return;
        }

        if (ingredients.includes(input.trim().toLowerCase())) {
            setError("This ingredient is already in the list.");
            return;
        }

        handleSubmit(input.trim());
        setInput("");
    }

    return (
        <>
            <form className="add-ingred-form" onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    placeholder="eg. tomatoes"
                    name="ingred"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    style={{ borderColor: error ? 'red' : '' }}
                />
                <button>+ Add Ingredients</button>
            </form>
            {error && <p className="add-ingred-error">{error}</p>}
        </>
    );
}
