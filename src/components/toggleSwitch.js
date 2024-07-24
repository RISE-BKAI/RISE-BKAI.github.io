import React from "react";
import "../styles/toggleSwitch.scss"; // Create a CSS file for styling the toggle switch

const ToggleSwitch = ({ isChecked, onToggle, labels }) => {
  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isChecked} onChange={onToggle} />
      <span className="slider">
        <span className="slider-label">{isChecked ? labels[1] : labels[0]}</span>
      </span>
    </label>
  );
};

export default ToggleSwitch;

