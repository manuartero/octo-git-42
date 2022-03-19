import { render, screen, fireEvent } from "@testing-library/react";
import MonkeyCounter from "./monkey-counter";

test("<MonkeyCounter /> detects 42", () => {
  render(<MonkeyCounter init={41} />);

  const btnElement = screen.getByRole("button");

  const monkey = screen.getByLabelText('see-no-evil');
  expect(monkey).toBeInTheDocument();

  fireEvent.click(btnElement);

  const monkey42 = screen.getByLabelText("hear-no-evil");
  expect(monkey42).toBeInTheDocument();
});
