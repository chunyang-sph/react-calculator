import {
  ADD,
  CALCULATE,
  CLEAR,
  BACKSPACE,
} from "./calculateActionType";

export const initialState = [
  {
    currentOperation: "0",
    calculated: true,
  },
];


// the reducer which will determine what actions to be used on the global state (context)
export function calculateReducer(state, action) {
  switch (action.type) {
    case ADD:
      let oldState = "";
      if (!state.calculated) {
        oldState = state.currentOperation ? state.currentOperation : "";
      }

      return {
        currentOperation: oldState + action.payload.input,
        calculated: false,
      };
    case CALCULATE:
      
      try {
        // eslint-disable-next-line no-eval
        const calcOutput = eval(state.currentOperation);
        return { currentOperation: calcOutput.toFixed(1), calculated: true };
      } catch {
        return initialState;
      }

    case BACKSPACE:
      if (!state.currentOperation.length) {
        return state;
      }
      const subtractedState = { ...state };
      const newOperation = subtractedState.currentOperation.slice(0, -1);
      subtractedState.currentOperation = newOperation;
      return subtractedState;

    case CLEAR:
      return initialState;

    default:
      return state;
  }
}

// the action creators that would be used to feed into the the dispatch
export function addAction(input) {
  return {
    type: ADD,
    payload: {
      input,
    },
  };
}

export function calculateAction() {
  return {
    type: CALCULATE,
    payload: {},
  };
}

export function backspaceAction() {
  return {
    type: BACKSPACE,
    payload: {},
  };
}

export function clearAction() {
  return {
    type: CLEAR,
    payload: {},
  };
}
