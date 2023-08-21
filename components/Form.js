import React, { useState } from "react";

// UI Import
import Input from "./UI/Input";
import Select from "./UI/Select";

function Form() {
  //   Options
  const buttonOptions = [
    { text: "Button 1", value: "btn1" },
    { text: "Button 2", value: "btn2" },
    { text: "Button 3", value: "btn3" },
    { text: "Button 4", value: "btn4" },
    { text: "Button 5", value: "btn5" },
  ];

  //   State definitions
  const [activeButton, setActiveButton] = useState("btn1");
  const [formData, setFormData] = useState({
    text: "",
    size: 0,
    padding: 0,
    colour: "",
    background: "",
    cornerRad: 0,
    width: 0,
    arrowWidth: 0,
    arrowHeight: 0,
  });

  //   Handling form changes
  const handleChange = () => {
    console.log("Button toggled");
  };

  const handleInputChange = (name, val) => {
    console.log(name);
    setFormData((prev) => {
      return {
        ...prev,
        [name]: val,
      };
    });
  };

  return (
    <form>
      <div>
        <div>
          <div>Target Element</div>
          <Select
            value={activeButton}
            options={buttonOptions}
            onChange={handleChange}
          />
        </div>
        <div>
          <div>ToolTip Text</div>
          <Input
            value={formData.text}
            placeholder="Enter Tooltip Text"
            type="text"
            name="text"
            onChange={handleInputChange}
            id="tooltiptext"
          />
        </div>

        {/* Flex row comps */}
        <div>
          <div>
            <div>Text Size</div>
            <Input
              value={formData.size}
              placeholder="Enter Size (px)"
              type="number"
              name="size"
              onChange={handleInputChange}
              id="tooltipSize"
            />
          </div>
          <div>
            <div>Padding</div>
            <Input
              value={formData.padding}
              placeholder="Enter Padding (px)"
              type="number"
              name="padding"
              onChange={handleInputChange}
              id="tooltipPadding"
            />
          </div>
        </div>

        <div>
          <div>Text Color</div>
          <Input
            value={formData.colour}
            placeholder="#161716"
            type="text"
            name="colour"
            onChange={handleInputChange}
            id="tooltipColour"
          />
        </div>
      </div>
      <div>
        <div>Background Color</div>
        <Input
          value={formData.background}
          placeholder="#3d9470"
          type="text"
          name="background"
          onChange={handleInputChange}
          id="tooltipBackground"
        />
      </div>

      {/* Flex row comps */}
      <div>
        <div>
          <div>Corner Radius</div>
          <Input
            value={formData.cornerRad}
            placeholder="Corner Radius (px)"
            type="number"
            name="cornerRad"
            onChange={handleInputChange}
            id="tooltipCornerRadius"
          />
        </div>
        <div>
          <div>Tooltip Width</div>
          <Input
            value={formData.width}
            placeholder="Enter tooltip width"
            type="number"
            name="width"
            onChange={handleInputChange}
            id="tooltipWidth"
          />
        </div>
      </div>

      {/* Flex row comps */}
      <div>
        <div>
          <div>Arrow Widht</div>
          <Input
            value={formData.arrowWidth}
            placeholder="Enter Arrow width"
            type="number"
            name="arrowWidth"
            onChange={handleInputChange}
            id="tooltipArrowWidth"
          />
        </div>
        <div>
          <div>Arrow Height</div>
          <Input
            value={formData.arrowHeight}
            placeholder="Enter Arrow Height"
            type="number"
            name="arrowHeight"
            onChange={handleInputChange}
            id="tooltipArrowHeight"
          />
        </div>
      </div>
    </form>
  );
}

export default Form;
