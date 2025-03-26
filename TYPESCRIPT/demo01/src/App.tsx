import { useState, ChangeEvent } from "react";
import './App.css'

export default function App(): JSX.Element {

  const [data, setData] = useState<string>("no data provided!");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setData(value || "no data provided!");
  };

  return (
    <main>
      <input
        placeholder="no data provided!"
        onChange={handleInputChange}
      />
      <h1>{data}</h1>
    </main>
  );
}