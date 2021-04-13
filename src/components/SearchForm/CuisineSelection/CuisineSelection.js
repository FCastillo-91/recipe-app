import React, { useState } from "react";
import SwitchButton from "../FreeFromSelection/SwitchButton/SwitchButton";
import {useAppState} from "../../../context/AppState";

const CuisineSelection = ({ cuisines }) => {
  const [open, setOpen] = useState(false);
  const { selectedCuisine, setSelectedCuisine } = useAppState();

  const cuisineIds = [];

  const handleCuisineSelectionChange = (e) => {
    const cuisineId = e.target.value;

    if (e.target.checked === true) {
      setSelectedCuisine([...selectedCuisine, cuisineId]);
    } else {
      const filteredCuisineIds = selectedCuisine.filter(
          (id) => id !== cuisineId
      );
      setSelectedCuisine(filteredCuisineIds);
    }
  };

  return (
    <div className="accordion" id="cuisineAccordion">
      <div className="card">
        <div className="card-header" id="headingOne">
          <h2 className="mb-0">
            <button
              className="btn btn-link btn-block text-left"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              onClick={(e) => {
                setOpen(!open);
              }}
            >
              Choose a cuisine
            </button>
          </h2>
        </div>
        <div
          id="collapseOne"
          className="collapse show"
          aria-labelledby="headingOne"
          data-parent="#cuisineAccordion"
        >
          {open && (
            <div className="card-body">
              {cuisines.map((cuisine) => {
                cuisineIds.push(cuisine.id);
                return (
                  <SwitchButton
                    label={cuisine.name}
                    id={cuisine.id}
                    key={cuisine.id}
                    onChange={handleCuisineSelectionChange}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CuisineSelection;
