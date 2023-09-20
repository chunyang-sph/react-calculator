import "./smallButton.css";
import { CalculateContext } from "../../provider/calculateProvider";
import { useContext, useEffect } from "react";
import {
  addAction,
  backspaceAction,
  calculateAction,
} from "../../reducer/calculate";

function SmallButton({ input }) {
  const { calcState, calcDispatch } = useContext(CalculateContext);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return ()=> document.removeEventListener('keydown', handleKeyPress)
  });

  const handleKeyPress = (e) => {
    if (e.key === String(input)) {
      handleClick();
    } 
    if(e.key==='Enter' && input ==='='){
        handleClick()
    }
  };

  const handleClick = () => {
    const currentState = calcState.currentOperation;
    if (input === "=") {
      if (
        currentState &&
        isNaN(Number(currentState[currentState.length - 1]))
      ) {
        calcDispatch(backspaceAction());
      }
      calcDispatch(calculateAction());
      return;
    }

    if (
      currentState &&
      isNaN(Number(input)) &&
      isNaN(Number(currentState[currentState.length - 1]))
    ) {
      calcDispatch(backspaceAction());
    }

    calcDispatch(addAction(`${input}`));
  };

  return (
    <div
      className={`calcButton ${isNaN(Number(input)) ? "light" : "dark"}`}
      onClick={handleClick}
    >
      {input}
    </div>
  );
}

export default SmallButton;
