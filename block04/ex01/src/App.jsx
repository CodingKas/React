import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="container">
      <button onClick={increaseCounter}>Increase</button>
      {counter % 2 !== 0 && <h2>{counter}</h2>}
    </div>
  );
};

export default App;
