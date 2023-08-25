import React from "react";

const Radio = ({ selectedValue, options, onChange }) => {
  return (
    <div className="radio_container">
      {options.map((option) => (
        <label key={option.value} className="radio_label">
          <input
            type="radio"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            className="radio_input"
          />
          {option.text}
        </label>
      ))}
    </div>
  );
};

export default Radio;
