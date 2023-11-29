import "./calcBody.css";

import Screen from "../../components/screen/screen";
import SmallButton from "../../components/smallButton/smallButton";

import { CalculateContext } from "../../provider/calculateProvider";
import { useContext } from "react";
import { clearAction } from "../../reducer/calculate";

function CalcBody() {
  const { calcDispatch } = useContext(CalculateContext);

  return (
    <div className="calcContainer">
      <Screen />
      <div className="buttonContainer"></div>
    </div>
  );
}

export default CalcBody;
