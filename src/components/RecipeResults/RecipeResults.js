import React from "react";
import RecipeCard from "./RecipeCard/RecipeCard";

const RecipeResults = ({ recipes }) => {
  return recipes.map((recipe) => {
    return (
      <RecipeCard
        key={recipe.id}
        id={recipe.id}
        img={recipe.image}
        title={recipe.title}
        description={`A recipe for ${recipe.title}`}
      />
    );
  });
};

export default RecipeResults;
