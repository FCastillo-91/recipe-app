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
  if(recipe.extendedIngredients){
    ingredientsList = recipe.extendedIngredients.map( ingredient => {
        return (<li>{ ingredient.original }</li>);
    });
  }

  return (
    <div className="card">
      <img src={recipe.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h3 className="card-title">{recipe.title}</h3>
        <h5>Ingredients</h5>
        <ul>{ingredientsList}</ul>
        <h5>Method</h5>
        <p className="card-text">{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default Recipe;
