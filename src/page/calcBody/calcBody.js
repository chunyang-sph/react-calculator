import "./calcBody.css";

import Screen from "../../components/screen/screen";
import SmallButton from "../../components/smallButton/smallButton";

import { CalculateContext } from "../../provider/calculateProvider";
import { useContext, useEffect } from "react";
import { clearAction, backspaceAction } from "../../reducer/calculate";

function CalcBody() {
  const buttons = [
    [7, 8, 9, "/"],
    [4, 5, 6, "*"],
    [3, 2, 1, "-"],
    [0, ".", "=", "+"],
  ];

  const { calcDispatch } = useContext(CalculateContext);

  const handleClear = () => {
    calcDispatch(clearAction());
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return ()=> document.removeEventListener('keydown', handleKeyPress)
  });

  const handleKeyPress = (e) => {
    if (e.key === 'Backspace') {
      calcDispatch(backspaceAction())
    } 
    if (e.key === 'Escape') {
        handleClear()
      } 
  };

  return (
    <div className="calcContainer">
      <Screen />
      <div className="buttonContainer">
        {buttons.map((row, index) => {
          return (
            <div className="btnRow" key={index + 1}>
              {row.map((button) => {
                return <SmallButton key={button} input={button} />;
              })}
            </div>
          );
        })}
      </div>
      <button onClick={handleClear} className="clearBtn">
        CLEAR
      </button>
    </div>
  );
}

export default CalcBody;
