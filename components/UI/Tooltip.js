import React from "react";

function Tooltip() {
  return (
    <>
      <div className="absolute bg-black -bottom-6 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45"></div>
      <div className="mt-4 absolute left-1/2 -translate-x-1/2 max-h-[100px] overflow-x-hidden overflow-y-auto no-scrollbar text-sm p-2 text-white bg-black rounded-lg w-15">
        ToolTip text ghsakdj
      </div>
    </>
  );
}

export default Tooltip;
