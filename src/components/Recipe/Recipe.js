import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {getSingleRecipe} from "../../api/recipes.api";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    getSingleRecipe(id).then(setRecipe)
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card">
      <img src={recipe.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{recipe.title}</h5>
        <h3>Ingredients</h3>
        <p className="card-text">{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default Recipe;
