import React from "./App.jsx";

function ConvertedValue({ euroAmount, rate }) {
  const converted = (euroAmount * rate).toFixed(2);

  return (
    <h1>{euroAmount ? `€${euroAmount} = $${converted}` : "Enter amount"}</h1>
  );
}

export default ConvertedValue;
