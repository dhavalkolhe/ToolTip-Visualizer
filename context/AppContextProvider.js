import React, { createContext, useState } from "react";

export const AppContext = createContext(null);

export default function AppContextProvider({ children }) {
  const [button1Properties, setButton1Properties] = useState({
    isButtonActive: true,
    text: "Hey",
    size: 16,
    padding: 5,
    colour: "#ffffff",
    background: "#156000",
    cornerRad: 5,
    width: 150,
    arrowWidth: 15,
    arrowHeight: 15,
    position: "bottom",
  });

  const [button2Properties, setButton2Properties] = useState({
    isButtonActive: false,
    text: "Tooltip for button 2",
    size: 16,
    padding: 5,
    colour: "#ffffff",
    background: "#156000",
    cornerRad: 5,
    width: 150,
    arrowWidth: 15,
    arrowHeight: 15,
    position: "bottom",
  });

  const [button3Properties, setButton3Properties] = useState({
    isButtonActive: false,
    text: "Tooltip for button 3",
    size: 16,
    padding: 5,
    colour: "#ffffff",
    background: "#156000",
    cornerRad: 5,
    width: 150,
    arrowWidth: 15,
    arrowHeight: 15,
    position: "bottom",
  });

  const [button4Properties, setButton4Properties] = useState({
    isButtonActive: false,
    text: "Tooltip for button 4",
    size: 16,
    padding: 5,
    colour: "#ffffff",
    background: "#156000",
    cornerRad: 5,
    width: 150,
    arrowWidth: 15,
    arrowHeight: 15,
    position: "bottom",
  });

  const [button5Properties, setButton5Properties] = useState({
    isButtonActive: false,
    text: "Tooltip for button 5",
    size: 16,
    padding: 5,
    colour: "#ffffff",
    background: "#156000",
    cornerRad: 5,
    width: 150,
    arrowWidth: 15,
    arrowHeight: 15,
    position: "bottom",
  });

  const contextValue = {
    button1Properties,
    setButton1Properties,
    button2Properties,
    setButton2Properties,
    button3Properties,
    setButton3Properties,
    button4Properties,
    setButton4Properties,
    button5Properties,
    setButton5Properties,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
