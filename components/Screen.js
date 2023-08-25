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

  // State variable to store show tip status for a particular button
  const [showTip, setShowTip] = useState(0);

  // Hover helper functions
  const handleMouseHover = (btnNumber) => {
    setShowTip(btnNumber);
  };
  const handleMouseLeave = () => {
    setShowTip(0);
  };

  // Screen UI
  return (
    <div className="h-[80%] flex flex-col justify-between bg-black bg-opacity-25 outline outline-[15px] outline-black p-2 rounded-xl w-[20%]">
      <div className="btnsContainer">
        <div className="relative">
          {showTip == 1 ? (
            <Tooltip data={button1Properties}>
              <button onMouseLeave={handleMouseLeave} className="btn">
                Button 1
              </button>
            </Tooltip>
          ) : (
            <button onMouseEnter={() => handleMouseHover(1)} className="btn">
              Button 1
            </button>
          )}
        </div>
        <div className="relative">
          {showTip == 2 ? (
            <Tooltip data={button2Properties}>
              <button onMouseLeave={handleMouseLeave} className="btn">
                Button 2
              </button>
            </Tooltip>
          ) : (
            <button onMouseEnter={() => handleMouseHover(2)} className="btn">
              Button 2
            </button>
          )}
        </div>
      </div>
      <div className="btnsContainer">
        <div className="relative">
          {showTip == 3 ? (
            <Tooltip data={button3Properties}>
              <button onMouseLeave={handleMouseLeave} className="btn">
                Button 3
              </button>
            </Tooltip>
          ) : (
            <button onMouseEnter={() => handleMouseHover(3)} className="btn">
              Button 3
            </button>
          )}
        </div>
      </div>
      <div className="btnsContainer">
        <div className="relative">
          {showTip == 4 ? (
            <Tooltip data={button4Properties}>
              <button onMouseLeave={handleMouseLeave} className="btn">
                Button 4
              </button>
            </Tooltip>
          ) : (
            <button onMouseEnter={() => handleMouseHover(4)} className="btn">
              Button 4
            </button>
          )}
        </div>
        <div className="relative">
          {showTip == 5 ? (
            <Tooltip data={button5Properties}>
              <button onMouseLeave={handleMouseLeave} className="btn">
                Button 5
              </button>
            </Tooltip>
          ) : (
            <button onMouseEnter={() => handleMouseHover(5)} className="btn">
              Button 5
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Screen;
