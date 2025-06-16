export default function CreateRecipe({ ingredients, setRecipe, setIsLoadingRecipe, setRecipeError }) {
    async function getRecipe() {
        const allIngreds = ingredients.join(", ");
        const PROMPT = `You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Give structured output with basic information included. Format your response in markdown to make it easier to render to a web page. \n\n Ingredients: ${allIngreds}`;

        try {
            setIsLoadingRecipe(true);
            setRecipeError(null);

            const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001'; // Fallback for local development

            const response = await fetch(`${BACKEND_URL}/api/generate-recipe`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt: PROMPT }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to generate recipe from backend.');
            }

            const data = await response.json();
            setRecipe([true, data.recipe]);

        } catch (error) {
            console.error("Error generating recipe:", error);
            setRecipeError("Failed to generate recipe. Please try again.");
        } finally {
            setIsLoadingRecipe(false);
        }
    }

    return (
        <div id="create-recipe-container">
            <div>
                <p id="create-recipe-large-text">Ready for a recipe?</p>
                <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={getRecipe} className="create-recipe-button">
                Get a recipe
            </button>
        </div>
    );
}
