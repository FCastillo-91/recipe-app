import React, { useState, useEffect } from "react";
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
      return <li>{cuisine}</li>
    })
  }
  
  let instructions = null;
  if(recipe.instructions) {
    instructions = recipe.instructions.split(".").map((line) => {
      return (<p>{line}</p>)
    })
  }

  return (
    <div className="card">
      <img src={recipe.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h3 className="card-title">{recipe.title}</h3>
        <h5>Ingredients</h5>
        <ul>{ingredientsList}</ul>
        <h5>Method</h5>
        <p className="card-text">{instructions}</p>
        <ul>{cuisines}</ul>
        <p>Ready in {recipe.readyInMinutes} minutes</p>
        <p>Enough for {recipe.servings} servings</p>
      </div>
    </div>
  );
};

export default Recipe;
