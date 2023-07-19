import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { CheckEven } from "./check-even.component";

describe("CheckEven component", () => {
  it("should check if the given number is even", () => {
    render(<CheckEven />);

    const numberInput = screen.getByTestId("number-input");
    const checkButton = screen.getByRole("button");

    userEvent.type(numberInput, "1");
    userEvent.click(checkButton);

    const resultElement = screen.getByText(/given number is even/i);

    expect(resultElement).toBeVisible();
  });
});
