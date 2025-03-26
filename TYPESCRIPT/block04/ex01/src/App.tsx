import React from "react";
import { User, ReadonlyUser } from "./types";
import { getUserSummary } from "./getUserSummary";

const App: React.FC = () => {
  // Example user
  const user: ReadonlyUser = {
    id: 1,
    name: "Kaz",
    email: "Kaz@example.com",
    role: "developer",

  const summary = getUserSummary(user);
  return (
    <div>
      <h1>TypeScript Utility Types</h1>
      <p>{summary}</p>
    </div>
  );
};

export default App;
