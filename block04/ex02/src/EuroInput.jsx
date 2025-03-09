import React from "./App.jsx";

function EuroInput({ setEuroAmount }) {
  return (
    <input
      type="number"
      placeholder="Enter amount in €"
      onChange={(e) => setEuroAmount(e.target.value)}
    />
  );
}

export default EuroInput;
