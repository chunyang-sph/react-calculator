import "./screen.css";
import { CalculateContext } from "../../provider/calculateProvider";
import { useContext } from "react";

// this component serves as the screen to be used in the app
function Screen() {
  const { calcState } = useContext(CalculateContext);

  // the content of what is on the screen is to be stored in the context so it can be used across multiple components without needing state to be based via props
  return (
    <div className="screen" data-testid="screen">
      <p>{calcState.currentOperation}</p>
    </div>
  );
}

export default Screen;
