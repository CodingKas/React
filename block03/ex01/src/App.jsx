import React, { useState } from "react";

const App = () => {
  const [userData, setUserData] = useState("no data provided!");

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setUserData(inputValue.trim() === "" ? "no data provided!" : inputValue);
  };

  return (
    <div>
      <h1>{userData}</h1>
      <input
        type="text"
        placeholder="Enter text..."
        onChange={handleInputChange}
      />
    </div>
  );
};

export default App;
