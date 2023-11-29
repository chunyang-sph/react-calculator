import { useReducer, createContext } from "react";

import { calculateReducer, initialState } from "../reducer/calculate";

export const CalculateContext = createContext();

const CalculateProvider = ({ children }) => {
  const [calcState, calcDispatch] = useReducer(calculateReducer, initialState);

  return (
    <CalculateContext.Provider value={{ calcState, calcDispatch }}>
      {children}
    </CalculateContext.Provider>
  );
};

export default CalculateProvider;
