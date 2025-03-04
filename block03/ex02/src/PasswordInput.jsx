import React from "./App.jsx";

function PasswordInput({ setPassword }) {
  return (
    <input
      type="password"
      placeholder="Enter your password"
      onChange={(e) => setPassword(e.target.value)}
    />
  );
}

export default PasswordInput;
