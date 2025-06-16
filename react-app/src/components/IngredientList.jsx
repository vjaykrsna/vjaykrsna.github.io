export default function IngredientList(props) {
    const ingredientsList = props.ingredients.map((ingred) => (
        <li key={ingred}>{ingred}</li>
    ));

    return (
            <div id="ingred-list-container">
                <h3 id="ingred-list-heading">Ingredients Avaialable:</h3>
                <ul id="ingred-list">{ingredientsList}</ul>
            </div>
    );
}
