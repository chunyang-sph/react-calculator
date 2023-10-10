import "./calcBody.css";

import Screen from "../../components/screen/screen";
import SmallButton from "../../components/smallButton/smallButton";

import { CalculateContext } from "../../provider/calculateProvider";
import { useContext } from "react";
import { clearAction } from "../../reducer/calculate";

function CalcBody() {
  // this is a matrix representing the buttons we will use in this app
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
