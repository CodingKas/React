// App.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Provides additional matchers for testing
import App from './App'; // Adjust the import path based on your file structure

describe('App Component', () => {

  test('renders without crashing', () => {
    // Render the App component
    render(<App />);
  });

  test('renders all categories', () => {
    render(<App />);

    // Categories that should be rendered
    const categories = [
      't-shirts',
      'hats',
      'shorts',
      'jackets',
      'pants',
      'shoes',
    ];

    // Check that each category is rendered, case-insensitively
    categories.forEach(category => {
      expect(screen.getByText(new RegExp(category, 'i'))).toBeInTheDocument();
    });
  });

  test('renders the correct number of categories', () => {
    render(<App />);
    
    // Check if the number of rendered categories matches the expected count, case-insensitively
    const categoryElements = screen.getAllByText(/(t-shirts|hats|shorts|jackets|pants|shoes)/i);
    expect(categoryElements.length).toBe(6);
  });
});
