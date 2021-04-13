import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleRecipe } from "../../api/recipes.api";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    getSingleRecipe(id).then(setRecipe);
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  let ingredientsList = null;
  if (recipe.extendedIngredients) {
    ingredientsList = recipe.extendedIngredients.map((ingredient) => {
      return <li>{ingredient.original}</li>;
    });
  }

  let cuisines = null;
  if (recipe.cuisines) {
    cuisines = recipe.cuisines.map((cuisine) => {
      return <li>{cuisine}</li>;
    });
  }

  let instructions = null;
  if (recipe.analyzedInstructions) {
    // eslint-disable-next-line array-callback-return
    recipe.analyzedInstructions.map((instruct) => {
      instructions = instruct.steps.map((item) => {
        return (
          <>
            <h6>Step {item.number}</h6>
            <p>{item.step}</p>
          </>
        );
      });
    });
  }

  return (
    <>
      {recipe && (
        <div className="card">
          <img src={recipe.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-title">{recipe.title}</h3>
            <h5>Ingredients</h5>
            <ul>{ingredientsList}</ul>
            <h5>Method</h5>
            <ul className="card-text">{instructions}</ul>
            <ul>{cuisines}</ul>
            <span className="badge badge-pill badge-info mr-1">
              Ready in {recipe.readyInMinutes} minutes
            </span>
            <span className="badge badge-pill badge-info mr-1">
              Enough for {recipe.servings} servings
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Recipe;
