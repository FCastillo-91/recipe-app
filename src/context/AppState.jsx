import React, { useContext, useState } from "react";

export const AppState = React.createContext({});

export const AppStateProvider = ({ children, value }) => {

  const [state, setState] = useState({
      ingredients: [],
      selectedFreeFrom: [],
      recipeResults: [],
      recipe: {}
  });

  const dispatch = (field, value) => {
      setState({...state, [field]: value})
  }

  return (
    <AppState.Provider
      value={{
        setIngredients: (ingredients) => dispatch("ingredients", ingredients),
        setSelectedFreeFrom: (selectedFreeFrom) => dispatch("selectedFreeFrom", selectedFreeFrom),
          setRecipeResults: (recipeResults) => dispatch("recipeResults", recipeResults),
          setRecipe: (recipe) => dispatch("recipe", recipe),
          dispatch,
          ...state
      }}
    >
      {children}
    </AppState.Provider>
  );
};

export const useAppState = () => useContext(AppState);
