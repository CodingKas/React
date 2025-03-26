**Challenge:**

1. **Create a new file** `src/filterItems.ts` for your reusable function in a TypeScript project.
2. **Define a generic function** called `filterItems<T>` that takes two arguments:
    - `items`: an array of type `T`
    - `callback`: a function that takes an item of type `T` and returns a boolean (`true` to keep the item, `false` to filter it out)
3. **Ensure that your function is reusable** with any data type, including strings, numbers, and custom objects.

---

**Example:**

```tsx
const numbers = [1, 2, 3, 4, 5];
const strings = ['Apple', 'Banana', 'Orange'];
const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 },
];

// Usage examples
const filteredNumbers = filterItems(numbers, (n) => n > 2); // [3, 4, 5]
const filteredStrings = filterItems(strings, (s) => s.startsWith('B')); // ['Banana']
const filteredUsers = filterItems(users, (user) => user.age > 30); // [{ id: 3, name: 'Charlie', age: 35 }]

```

**Expected Output:**

- The function should correctly filter out items based on the callback condition.

**Challenge Goals:**

- Implement the function using **TypeScript generics**.
- Write **type-safe** code that can handle arrays of different types (numbers, strings, and objects).

• Test the app with `npx vitest` from the `block03/ex01` folder (there are test files for all the components in corresponding test files)
