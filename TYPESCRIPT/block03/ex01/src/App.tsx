//  otional render component to use with your function from filterItems.ts
import { filterItems } from "./filterItems";

const App: React.FC = () => {
  const numbers = [1, 2, 3, 4, 5];
  const strings = ["Apple", "Banana", "Orange"];
  const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
  ];

  const filteredNumbers = filterItems(numbers, (n) => n > 2);
  const filteredStrings = filterItems(strings, (s) => s.startsWith("B"));
  const filteredUsers = filterItems(users, (user) => user.age > 30);

  return (
    <div>
      <h1>Reusable Array Filter Function</h1>
      <h3>Filtered Numbers</h3>
      <p>{JSON.stringify(filteredNumbers)}</p>

      <h3>Filtered Strings</h3>
      <p>{JSON.stringify(filteredStrings)}</p>

      <h3>Filtered Users</h3>
      <p>{JSON.stringify(filteredUsers)}</p>
    </div>
  );
};

export default App;
