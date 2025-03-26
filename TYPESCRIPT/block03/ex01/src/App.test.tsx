import { describe, it, expect } from 'vitest'; // Explicit import of Vitest's `expect`
import { filterItems } from './filterItems';

describe('filterItems function', () => {
  it('filters numbers greater than 2', () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = filterItems(numbers, (n) => n > 2);
    expect(result).toEqual([3, 4, 5]);
  });

  it('filters strings that start with "B"', () => {
    const strings = ['Apple', 'Banana', 'Orange'];
    const result = filterItems(strings, (s) => s.startsWith('B'));
    expect(result).toEqual(['Banana']);
  });

  it('filters objects based on a property condition', () => {
    const users = [
      { id: 1, name: 'Alice', age: 25 },
      { id: 2, name: 'Bob', age: 30 },
      { id: 3, name: 'Charlie', age: 35 },
    ];
    const result = filterItems(users, (user) => user.age > 30);
    expect(result).toEqual([{ id: 3, name: 'Charlie', age: 35 }]);
  });

  it('returns an empty array if no items match', () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = filterItems(numbers, (n) => n > 10);
    expect(result).toEqual([]);
  });

  it('handles an empty array gracefully', () => {
    const emptyArray: number[] = [];
    const result = filterItems(emptyArray, (n) => n > 0);
    expect(result).toEqual([]);
  });

  it('filters with complex conditions', () => {
    const items = [
      { name: 'Book', price: 10 },
      { name: 'Pen', price: 2 },
      { name: 'Laptop', price: 1000 },
    ];
    const result = filterItems(items, (item) => item.price > 100);
    expect(result).toEqual([{ name: 'Laptop', price: 1000 }]);
  });
});
