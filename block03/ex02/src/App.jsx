import React from "./App.jsx";
import EmailInput from "./EmailInput.jsx";
import PasswordInput from "./PasswordInput.jsx";
import SubmitButton from "./SubmitButton.jsx";
import "./index.css";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div>
      <h1>Login Form</h1>
      <EmailInput setEmail={setEmail} />
      <PasswordInput setPassword={setPassword} />
      <SubmitButton onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
