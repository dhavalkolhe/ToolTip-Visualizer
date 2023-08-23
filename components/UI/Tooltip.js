import React from "react";

function Tooltip({ data }) {
  const dynamicArrowStyle = {
    position: "absolute",
    backgroundColor: `${data.background}`,
    bottom: "-1.5rem",
    left: "50%",
    transform: `translateX(-50%) rotate(45deg)`,
    width: `${data.arrowWidth}px`,
    height: `${data.arrowHeight}px`,
  };

  const dynamicStyle = {
    marginTop: "1rem",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    maxHeight: "100px",
    overflowX: "hidden",
    overflowY: "auto",
    fontSize: `${data.size}px`,
    padding: `${data.padding}px`,
    color: `${data.colour}`,
    backgroundColor: `${data.background}`,
    borderRadius: `${data.cornerRad}px`,
    width: `${data.width}px`,
  };

  return (
    <>
      <div style={dynamicArrowStyle}></div>
      <div style={dynamicStyle}>{data.text}</div>
    </>
  );
}

export default Tooltip;
