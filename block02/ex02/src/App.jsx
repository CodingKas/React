import App from "./App";
import Name from "./Name";
import Surname from "./Surname";

function App() {
  const names = ["Clifford", "Russel", "Michael", "Dennis", "Andre"];
  const surnames = ["Smith", "Simmons", "Diamond", "Coles", "Benjamin"];

  return (
    <div>
      <h1>First Names and Surnames</h1>
      {names.map((name, idx) => (
        <div key={idx}>
          <Name name={name} /> <Surname surname={surnames[idx]} />
        </div>
      ))}
    </div>
  );
}

export default App;
