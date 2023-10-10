import "./screen.css";
import { CalculateContext } from "../../provider/calculateProvider";
import { useContext } from "react";

// this component will be used as the screen on our calculator
function Screen() {
  const { calcState } = useContext(CalculateContext);

  // we will hold the "state" of the screen in our context so it can be manipulated with other components without the need to pass states via props
  return <div className="screen"><p>{calcState.currentOperation}</p></div>;
}

export default Screen;
