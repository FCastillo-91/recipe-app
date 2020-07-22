export const recipeIngredientAdapter = (ingredientsData, name) => {
    if (ingredientsData) {
        ingredientsData.map((ingredient) => {
            return {
              ingredient.name
            }
        });
    }
};

export const recipeCuisineAdapter = (cuisines) => {
  if (cuisines) {
    cuisines = cuisines.map((cuisine) => {
      return cuisine;
    });
  }
};

export const recipeInstructionsAdapter = (recipeInstructionsData) => {
  if (recipeInstructionsData) {
    recipeInstructionsData.split(".").map((line) => {
      return { line };
    });
  }
};
