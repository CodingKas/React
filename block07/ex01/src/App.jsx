import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: "",
  });
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password, password2 } = formData;

    if (!email.includes("@") || email.split("@").length !== 2) {
      showMessage("Please, provide a valid email.", "error");
      return;
    }

    if (password.length < 8) {
      showMessage("Password must have at least 8 characters.", "error");
      return;
    }

    if (password !== password2) {
      showMessage("Passwords should match.", "error");
      return;
    }

    showMessage("Successfully registered", "success");
  };

  const showMessage = (msg, type) => {
    setMessage(msg);
    setMessageType(type);
    setTimeout(() => {
      setMessage(null);
    }, 2000);
  };

  return (
    <div className="container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Enter email"
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          placeholder="Enter password"
          onChange={handleChange}
        />
        <input
          type="text"
          name="password2"
          placeholder="Confirm password"
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>

      {message && <h2 className={messageType}>{message}</h2>}
    </div>
  );
};

export default App;
