import React from "react";
import { useAppState } from "../../../context/AppState";

const YourIngredients = () => {
  const { ingredients, setIngredients } = useAppState();

  const deleteIngredient = (ingredient) => {
    const updatedIngredients = ingredients.filter((item) => {
      return item !== ingredient;
    });
    setIngredients(updatedIngredients);
  };

  return (
    <div className="card h-100">
      <div className="card-body">
        <h3 className="card-title">Your ingredients</h3>
        {ingredients.map((ingredient, index) => {
          return (
            <button
              onClick={(e) => {
                deleteIngredient(ingredient);
              }}
              data-testid="an-ingredient"
              key={index}
            >
              {ingredient}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default YourIngredients;
