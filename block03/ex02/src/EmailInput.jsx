import React from "./App.jsx";

function EmailInput({ setEmail }) {
  return (
    <input
      type="email"
      placeholder="Enter your email"
      onChange={(e) => setEmail(e.target.value)}
    />
  );
}

export default EmailInput;
