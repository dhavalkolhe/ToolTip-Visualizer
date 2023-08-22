import React, { createContext, useState } from "react";

export const AppContext = createContext(null);

export default function AppContextProvider({ children }) {
  const [button1Properties, setButton1Properties] = useState({
    isButtonActive: true,
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

  const [button2Properties, setButton2Properties] = useState({
    isButtonActive: false,
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

  const [button3Properties, setButton3Properties] = useState({
    isButtonActive: false,
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

  const [button4Properties, setButton4Properties] = useState({
    isButtonActive: false,
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

  const [button5Properties, setButton5Properties] = useState({
    isButtonActive: false,
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
