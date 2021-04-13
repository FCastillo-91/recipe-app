import React from "react";

const SwitchButton = ({id, label, onChange}) => {
    const style = {minWidth: "200px"}
  return (
      <div className="custom-control custom-switch custom-control-inline" style={style}>
        <input
          type="checkbox"
          className="custom-control-input"
          id={`${label}-switch-${id}`}
          onChange={onChange}
          value={label.toLowerCase()}
        />
        <label
          className="custom-control-label"
          htmlFor={`${label}-switch-${id}`}
        >
          {label}
        </label>
      </div>
  );
};

export default SwitchButton;
