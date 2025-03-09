import React, { useState } from "react";
import "./index.css";

const App = () => {
  const users = [
    { email: "a@a.com", password: "a" },
    { email: "b@b.com", password: "b" },
    { email: "c@c.com", password: "c" },
  ];

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState(null);
  const [countdown, setCountdown] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userFound = users.some(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    setMessage(userFound ? "Match found successfully" : "Match not found");
    setCountdown(3);

    let counter = 3;
    const interval = setInterval(() => {
      setCountdown((prev) => (prev !== null ? prev - 1 : null));

      if (counter === 0) {
        clearInterval(interval);
        setMessage(null);
        setCountdown(null);
      }
      counter--;
    }, 1000);
  };

  return (
    <div className="container">
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleChange}
        />
        <input
          name="password"
          placeholder="Enter password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>

      {message && (
        <h2 className={message.includes("successfully") ? "success" : "error"}>
          {message}
        </h2>
      )}
      {countdown !== null && (
        <h3>This message will disappear in {countdown}</h3>
      )}
    </div>
  );
};

export default App;
