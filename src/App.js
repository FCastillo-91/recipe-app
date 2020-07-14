import React from "react";
import "./App.css";
import intoleranceList from "./stubs/intoleranceList";

import Header from "../src/components/Header/Header";
import SearchForm from "./components/SearchForm/SearchForm";
import RecipeResults from "./components/RecipeResults/RecipeResults";
import Recipe from "./components/Recipe/Recipe";
import { useAppState } from "./context/AppState";
import banner from "../src/assets/banner.jpg";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { getRecipes } from "./api/recipes.api";

const App = () => {
  const {
    ingredients,
    recipeResults,
    setRecipeResults,
    selectedFreeFrom,
  } = useAppState();

  const searchRecipes = () => {
    if (ingredients.length > 1) {
      getRecipes(ingredients, selectedFreeFrom).then(setRecipeResults);
    }
  };

  const style = { backgroundImage: `url(${banner})` };

  return (
    <Router>
      <div className="App" style={style}>
        <Header />
        <Switch>
          <Route exact path="/">
            <div className="search-form-area">
              <SearchForm
                intolerances={intoleranceList.freeFrom}
                searchRecipes={searchRecipes}
              />
            </div>
            <div className="container">
              <div className="recipe-results-area">
                <div className="row">
                  <RecipeResults recipes={recipeResults} />
                </div>
              </div>
            </div>
          </Route>
          <Route path="/recipe/:id">
            <div className="container">
              <Recipe />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
