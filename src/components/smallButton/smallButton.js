import "./smallButton.css";
import { CalculateContext } from "../../provider/calculateProvider";
import { useContext, useEffect } from "react";
import {
  addAction,
  backspaceAction,
  calculateAction,
} from "../../reducer/calculate";

// this is to represent EACH of the buttons
function SmallButton({ input }) {
  const { calcState, calcDispatch } = useContext(CalculateContext);

  // this useEffect will be used to make a keydown listener on component mount so that they are each listening to if their key was typed on a keyboard
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    // the return is used as a "component did unmount" cyle and used to disable the event listener
    return () => document.removeEventListener("keydown", handleKeyPress);
  });

  // handle the keypresses!
  const handleKeyPress = (e) => {
    if (e.key === String(input)) {
      handleClick();
    }
    if (e.key === "Enter" && input === "=") {
      handleClick();
    }
  };

  const handleClick = () => {
    const currentState = calcState.currentOperation;
    if (input === "=") {
      if (
        currentState &&
        isNaN(Number(currentState[currentState.length - 1]))
      ) {
        // if there are two operations in a row we just have to make sure we subtract the last one first
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
      data-testid={`button${input}`}
    >
      {input}
    </div>
  );
}

export default SmallButton;
