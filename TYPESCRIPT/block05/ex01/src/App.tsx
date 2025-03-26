import React, { useState } from "react";
import { processInput, handleInput, InputField } from "./formHandler";

const App: React.FC = () => {
  const [textInput, setTextInput] = useState("");
  const [numberInput, setNumberInput] = useState<number | null>(null);
  const [output, setOutput] = useState("");

  const handleTextSubmit = () => {
    if (textInput.trim() === "") {
      setOutput("No text submitted");
      return;
    }

    const textField: InputField = { type: "text", value: textInput };
    setOutput(handleInput(textField));
  };

  const handleNumberSubmit = () => {
    if (numberInput === null || isNaN(numberInput)) {
      setOutput("No number input provided");
    } else {
      const numberField: InputField = { type: "number", value: numberInput };
      setOutput(handleInput(numberField));
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Interactive Form</h1>

      <div>
        <label>Enter Text:</label>
        <input
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
        <button onClick={handleTextSubmit}>Submit Text</button>
      </div>

      <div>
        <label>Enter Number:</label>
        <input
          type="number"
          value={numberInput ?? ""}
          onChange={(e) =>
            setNumberInput(e.target.value ? Number(e.target.value) : null)
          }
        />
        <button onClick={handleNumberSubmit}>Submit Number</button>
      </div>

      {output && (
        <p>
          <strong>{output}</strong>
        </p>
      )}
    </div>
  );
};

export default App;
