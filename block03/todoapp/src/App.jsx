import React, { useState } from "react";
import "./index.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTask = (index) => {
    setTasks(
      tasks.map((t, i) => (i === index ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Add a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.map((t, index) => (
          <li key={index} className={t.completed ? "done" : ""}>
            <span onClick={() => toggleTask(index)}>{t.text}</span>
            <FaTrash
              className="delete-icon"
              onClick={() => removeTask(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
