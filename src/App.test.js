import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders heading - main", () => {
  render(<App />);
  const heading = screen.getByRole('heading');
  const main = screen.getByRole('main');
  expect(heading).toBeInTheDocument();
  expect(main).toBeInTheDocument();
});
