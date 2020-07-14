import React from "react";
import { useState } from "react";
import { useAppState } from "../../../context/AppState";

const SearchInput = ({ title, text }) => {
  const { ingredients, setIngredients } = useAppState();
  const [ingredientSearchInput, setIngredientSearchInput] = useState("");

  const handleChange = (e) => {
    setIngredientSearchInput(e.target.value);
  };

  const submitIngredients = (e) => {
    e.preventDefault();
    if (ingredientSearchInput.length <= 0) {
      return;
    }
    setIngredientSearchInput("");
    setIngredients([...ingredients, ingredientSearchInput]);
  };

  return (
    <div className="card h-100">
      <div className="card-body">
        <h3 className="card-title" data-testid="search-title">
          {title}
        </h3>
        <p className="card-text" data-testid="search-text">
          {text}
        </p>
        <form onSubmit={submitIngredients}>
          <div className="form-group">
            <input
              data-testid="form-control-input"
              type="text"
              className="form-control"
              id="formInput"
              placeholder="Enter ingredients"
              value={ingredientSearchInput}
              onChange={handleChange}
            />
          </div>
          <button
            data-testid="submit-ingredients-btn"
            onClick={submitIngredients}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchInput;
