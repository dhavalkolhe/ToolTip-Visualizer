import React, { useState, useContext, useEffect } from "react";

import { AppContext } from "../context/AppContextProvider.js";

import Tooltip from "../components/UI/Tooltip";

function Screen() {
  const {
    button1Properties,
    button2Properties,
    button3Properties,
    button4Properties,
    button5Properties,
  } = useContext(AppContext);

  const [showTip, setShowTip] = useState(0);

  const handleMouseHover = (btnNumber) => {
    setShowTip(btnNumber);
  };
  const handleMouseLeave = () => {
    setShowTip(0);
  };

  return (
    <div className="h-[80%] flex flex-col justify-between bg-black bg-opacity-25 outline outline-[15px] outline-black p-2 rounded-xl w-[20%]">
      <div className="btnsContainer">
        <div className="relative">
          <button
            onMouseEnter={() => handleMouseHover(1)}
            onMouseLeave={handleMouseLeave}
            className="btn"
          >
            Button 1
          </button>
          {button1Properties.isButtonActive == true || showTip == 1 ? (
            <Tooltip data={button1Properties} />
          ) : null}
        </div>
        <div className="relative">
          <button
            onMouseEnter={() => handleMouseHover(2)}
            onMouseLeave={handleMouseLeave}
            className="btn"
          >
            Button 2
          </button>
          {button2Properties.isButtonActive == true || showTip == 2 ? (
            <Tooltip data={button2Properties} />
          ) : null}
        </div>
      </div>
      <div className="btnsContainer">
        <div className="relative">
          <button
            onMouseEnter={() => handleMouseHover(3)}
            onMouseLeave={handleMouseLeave}
            className="btn"
          >
            Button 3
          </button>
          {button3Properties.isButtonActive == true || showTip == 3 ? (
            <Tooltip data={button3Properties} />
          ) : null}
        </div>
      </div>
      <div className="btnsContainer">
        <div className="relative">
          <button
            onMouseEnter={() => handleMouseHover(4)}
            onMouseLeave={handleMouseLeave}
            className="btn"
          >
            Button 4
          </button>
          {button4Properties.isButtonActive == true || showTip == 4 ? (
            <Tooltip data={button4Properties} />
          ) : null}
        </div>
        <div className="relative">
          <button
            onMouseEnter={() => handleMouseHover(5)}
            onMouseLeave={handleMouseLeave}
            className="btn"
          >
            Button 5
          </button>
          {button5Properties.isButtonActive == true || showTip == 5 ? (
            <Tooltip data={button5Properties} />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Screen;
