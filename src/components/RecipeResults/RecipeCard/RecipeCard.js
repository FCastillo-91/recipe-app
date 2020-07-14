import React from "react";
import "./RecipeCard.css";
import {Link} from "react-router-dom";

const RecipeCard = ({ img, title, description, id }) => {

  const baseUrl = "https://spoonacular.com/recipeImages/";
  const style = { backgroundImage: `url(${baseUrl}${img})` };

  return (
    <div className="col-sm-6 mb-3">
      <div className="card h-100">
        <div className="card-body">
          <div className="card-img-bckground" style={style}></div>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <Link to={`/recipe/${id}`} className="btn btn-secondary">View Recipe</Link>
      </div>
    </div>
  );
};

export default RecipeCard;
