// Importing necessary functionality from react
import { useReducer, createContext } from "react";

// importing the reducer and initial state from the reducer files
import { calculateReducer, initialState } from "../reducer/calculate";

// creating a new empty context for children components to use
export const CalculateContext = createContext();

const CalculateProvider = ({ children }) => {
  // initializing a useReducer (advanced useState), with the state (calcState) and the setState(calcDispatch) being passed down in the context provider
  const [calcState, calcDispatch] = useReducer(calculateReducer, initialState);

  return (
    //provider AROUND the children component to make sure all children components have access to this
    <CalculateContext.Provider value={{ calcState, calcDispatch }}>
      {children}
    </CalculateContext.Provider>
  );
};

export default CalculateProvider;
