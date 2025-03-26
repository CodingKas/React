// App.test.tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Provides additional matchers for testing
import App from './App'; // Adjust the import path based on your file structure

describe('App Component', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('passes the correct products prop to List', () => {
    render(<App />);
    const productNames = ["flash t-shirt", "batman t-shirt", "superman hat"];
    productNames.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });
});
