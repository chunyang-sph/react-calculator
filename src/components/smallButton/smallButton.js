import "./smallButton.css";
import { CalculateContext } from "../../provider/calculateProvider";
import { useContext } from "react";
import { addAction, calculateAction } from "../../reducer/calculate";

function SmallButton({ input }) {
  return <div onClick={console.log("time to do something here!")}>{input}</div>;
}

export default SmallButton;
