/** @format */

import React, { useReducer } from "react";
const intialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error("Unknow error");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, intialState);

  return (
    <>
      Count:{state.count}
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </>
  );
}
export default App;
