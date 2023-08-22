import React from "react";
import Tooltip from "../components/UI/Tooltip";

function Screen() {
  return (
    <div className="h-[80%] flex flex-col justify-between bg-black bg-opacity-25 outline outline-[15px] outline-black p-2 rounded-xl w-[20%]">
      <div className="btnsContainer">
        <div>
          <button className="btn">Button 1</button>
        </div>
        <div>
          <button className="btn">Button 2</button>
        </div>
      </div>
      <div className="btnsContainer">
        <div>
          <button className="btn">Button 3</button>
          <Tooltip />
        </div>
      </div>
      <div className="btnsContainer">
        <div>
          <button className="btn">Button 4</button>
        </div>
        <div>
          <button className="btn">Button 5</button>
        </div>
      </div>
    </div>
  );
}

export default Screen;
