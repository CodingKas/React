import React from "./App";
import Child from "./Child";

function App() {
  const myName = "Kasmeen Khaira";

  return (
    <div>
      <h1>Parent Component</h1>
      <Child name={myName} /> {/* Pass myName as a prop */}
    </div>
  );
}

export default App;
