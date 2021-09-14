import { render, screen } from '@testing-library/react';
// eslint-disable-next-line no-unused-vars
import App from './App.js';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
