import Markdown from "react-markdown";

export default function RecipeSection(props) {
    return (
        <div className="recipe-section-container">
            <Markdown>
                {props.recipe}
            </Markdown>
        </div>
    );
}
