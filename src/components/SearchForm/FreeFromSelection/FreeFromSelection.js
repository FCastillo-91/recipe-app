import React from "react";
import SwitchButton from "./SwitchButton/SwitchButton";
import {useAppState} from "../../../context/AppState";

const FreeFromSelectionPanel = ({intolerances}) => {
    const freeFromIds = [];
    const {selectedFreeFrom, setSelectedFreeFrom} = useAppState();

    const handleFreeFromSwitchChange = (e) => {
        const freeFromId = e.target.value;

        if (e.target.checked === true) {
            setSelectedFreeFrom([...selectedFreeFrom, freeFromId]);
        } else {
            const filteredFreeFromIds = selectedFreeFrom.filter(
                (id) => id !== freeFromId
            );
            setSelectedFreeFrom(filteredFreeFromIds);
        }
    };
    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">FreeFrom</h3>
                {intolerances.map((intolerance) => {
                    freeFromIds.push(intolerance.id);
                    return (
                        <SwitchButton
                            label={intolerance.name}
                            id={intolerance.id}
                            key={intolerance.id}
                            onChange={handleFreeFromSwitchChange}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default FreeFromSelectionPanel;
