import { ADD, CALCULATE, CLEAR } from "./calculateActionType";

// Sample Initial State
export const initialState = [
  {
    currentOperation: "0",
    calculated: true,
  },
];

// The reducer function to be used to manipulate the shared state
export function calculateReducer(state, action) {
  switch (action.type) {
    case ADD:
      return state;
    case CALCULATE:
      return state;
    case CLEAR:
      return state;
    default:
      return state;
  }
}

// the following actions are to help set up our data easily to be easily used with our reducer function above
export function addAction() {
  return {
    type: ADD,
    payload: {},
  };
}

export function calculateAction() {
  return {
    type: CALCULATE,
    payload: {},
  };
}

export function clearAction() {
  return {
    type: CLEAR,
    payload: {},
  };
}
