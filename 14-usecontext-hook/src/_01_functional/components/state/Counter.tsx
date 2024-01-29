import { useReducer } from "react";

type TypeCounterState = {
  count: number;
};

type TypeUpdateAction = {
  type: "increment" | "decrement"; // adding literal type  for stricter choice
  payload: number;
};

type TypeResetAction = {
  type: "reset";
};

const initialState: TypeCounterState = { count: 0 };

function reducer(
  state: TypeCounterState,
  action: TypeUpdateAction | TypeResetAction,
) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "reset":
      return initialState;
    case "decrement":
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

export function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h2>Count: {state.count}</h2>
      <br />
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment by 10
      </button>
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        Increment by 5
      </button>
      <button onClick={() => dispatch({ type: "increment", payload: 2 })}>
        Increment by 2
      </button>
      &nbsp;
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      &nbsp;
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement by 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>
        Decrement by 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 2 })}>
        Decrement by 2
      </button>
    </>
  );
}
