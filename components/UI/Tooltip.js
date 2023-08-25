import React from "react";

// Dynamic Tooltip component
const Tooltip = ({ data, children }) => {
  const tooltipStyles = `
    .tooltip {
      align-items: center;
      background-color: ${data.background};
      border-radius: ${data.cornerRad}px;
      display: flex;
      justify-content: center;
      padding: ${data.padding}px;
      position: absolute;
      white-space: normal;
      z-index: 100;
      text-align: center
    }

    .tooltip-wrapper {
      align-items: center;
      display: flex;
      justify-content: center;
      position: relative;
    }

    .tooltip::before {
      content: "";
      border: solid transparent;
      border-color: ${data.background};
      border-width: 5px;
      height: 0;
      position: absolute;
      pointer-events: none;
      transform: rotate(45deg);
      width: 0;
      z-index: -1;
    }

    .tooltip-content {
      color: ${data.colour};
      font-size: ${data.size}px;
      width: ${data.width}px;
      overflow: hidden;
    }

    .tooltip.tooltip-top {
      top: calc(var(--tooltip-spacing, 45px) * -1);
    }

    .tooltip.tooltip-top::before {
      bottom: -5px;
      left: 50%;
      margin-left: -5px;
    }

    .tooltip.tooltip-right {
      left: calc(100% + var(--tooltip-spacing, 10px));
      top: 0;
    }

    .tooltip.tooltip-right::before {
      left: 0;
      margin-left: -5px;
      top: calc(50% - 5px);
    }

    .tooltip.tooltip-bottom {
      bottom: calc(var(--tooltip-spacing, 40px) * -1);
    }

    .tooltip.tooltip-bottom::before {
      left: 50%;
      margin-left: -5px;
      top: -5px;
    }

    .tooltip.tooltip-left {
      right: calc(100% + var(--tooltip-spacing, 10px));
      top: 0;
    }

    .tooltip.tooltip-left::before {
      margin-right: -5px;
      right: 0;
      top: calc(50% - 5px);
    }
  `;

  const tooltipClasses = `tooltip tooltip-${data.position}`;

  return (
    <>
      <style>{tooltipStyles}</style>
      <div className="tooltip-wrapper">
        <div className="tooltip-children">{children}</div>

        <div className={tooltipClasses}>
          <div className="tooltip-content">{data.text}</div>
        </div>
      </div>
    </>
  );
};

export default Tooltip;
