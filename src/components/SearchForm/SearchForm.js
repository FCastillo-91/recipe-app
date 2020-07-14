import React from "react";
import SearchInput from "./SearchInput/SearchInput";
import YourIngredients from "./YourIngredients/YourIngredients";
import FreeFromSelectionPanel from "./FreeFromSelection/FreeFromSelection";
import "./SearchForm.css";

const SearchForm = ({ intolerances, searchRecipes }) => {
  return (
    <div className="search-form">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 mb-3">
            <SearchInput
              title="Ingredients I need to use up"
              text="We need a minimum of 3 ingredients to find you some recipes."
            />
          </div>
          <div className="col-sm-4 mb-3">
            <YourIngredients />
          </div>
          <div className="col-12">
            <FreeFromSelectionPanel intolerances={intolerances} />
          </div>
          <div className="col-12">
            <button
              onClick={searchRecipes}
              type="button"
              className="btn btn-secondary btn-lg btn-block"
            >
              Search for Recipes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
