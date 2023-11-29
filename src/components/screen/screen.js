import "./screen.css";
import { CalculateContext } from "../../provider/calculateProvider";
import { useContext } from "react";

function Screen() {
  const { calcState } = useContext(CalculateContext);

  return (
    <div className="screen">
      <p></p>
    </div>
  );
}

export default Screen;
