import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContextProvider.js";

// UI Import
import Input from "./UI/Input";
import Select from "./UI/Select";

function Form() {
  // importing context
  const {
    button1Properties,
    button2Properties,
    button3Properties,
    button4Properties,
    button5Properties,
    setButton1Properties,
    setButton2Properties,
    setButton3Properties,
    setButton4Properties,
    setButton5Properties,
  } = useContext(AppContext);

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
  const handleTargetBtnChange = (e) => {
    // set previously active button to false
    switch (Number(activeButton.slice(-1))) {
      case 1:
        setButton1Properties((prev) => {
          return {
            ...prev,
            isButtonActive: false,
          };
        });
        break;
      case 2:
        setButton2Properties((prev) => {
          return {
            ...prev,
            isButtonActive: false,
          };
        });
        break;
      case 3:
        setButton3Properties((prev) => {
          return {
            ...prev,
            isButtonActive: false,
          };
        });
        break;
      case 4:
        setButton4Properties((prev) => {
          return {
            ...prev,
            isButtonActive: false,
          };
        });
        break;
      case 5:
        setButton5Properties((prev) => {
          return {
            ...prev,
            isButtonActive: false,
          };
        });
        break;
    }

    const targetBtn = e.target.value;
    setActiveButton(targetBtn);

    //set new active button to true in context
    switch (Number(targetBtn.slice(-1))) {
      case 1:
        setButton1Properties((prev) => {
          return {
            ...prev,
            isButtonActive: true,
          };
        });
        break;
      case 2:
        setButton2Properties((prev) => {
          return {
            ...prev,
            isButtonActive: true,
          };
        });
        break;
      case 3:
        setButton3Properties((prev) => {
          return {
            ...prev,
            isButtonActive: true,
          };
        });
        break;
      case 4:
        setButton4Properties((prev) => {
          return {
            ...prev,
            isButtonActive: true,
          };
        });
        break;
      case 5:
        setButton5Properties((prev) => {
          return {
            ...prev,
            isButtonActive: true,
          };
        });
        break;
    }
    // Fetch Data of Active button from context and fill the form
    // use swithc case
    switch (Number(targetBtn.slice(-1))) {
      case 1:
        setFormData(() => {
          return { ...button1Properties };
        });
        break;
      case 2:
        setFormData(() => {
          return { ...button2Properties };
        });
        break;
      case 3:
        setFormData(() => {
          return { ...button3Properties };
        });
        break;
      case 4:
        setFormData(() => {
          return { ...button4Properties };
        });
        break;
      case 5:
        setFormData(() => {
          return { ...button5Properties };
        });
        break;
    }
  };

  const handleInputChange = (name, val) => {
    setFormData((prev) => {
      const updatedFormData = {
        ...prev,
        [name]: val,
      };

      // Update button properties based on active button
      switch (Number(activeButton.slice(-1))) {
        case 1:
          setButton1Properties((prev) => ({
            ...prev,
            ...updatedFormData,
          }));
          break;
        case 2:
          setButton2Properties((prev) => ({
            ...prev,
            ...updatedFormData,
          }));
          break;
        case 3:
          setButton3Properties((prev) => ({
            ...prev,
            ...updatedFormData,
          }));
          break;
        case 4:
          setButton4Properties((prev) => ({
            ...prev,
            ...updatedFormData,
          }));
          break;
        case 5:
          setButton5Properties((prev) => ({
            ...prev,
            ...updatedFormData,
          }));
          break;
        default:
          break;
      }

      return updatedFormData; // Update the formData state
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
            onChange={handleTargetBtnChange}
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
