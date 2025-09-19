import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dashboard page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Dashboard Page/i);
  expect(linkElement).toBeInTheDocument();
});
