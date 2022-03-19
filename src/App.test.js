import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main button', () => {
  render(<App />);
  const btnElement = screen.getByRole('button');
  expect(btnElement).toBeInTheDocument();
});
