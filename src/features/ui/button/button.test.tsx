import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./button.component";
import userEvent from "@testing-library/user-event"

describe("Button", () => {
  it("should render the children prop", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click Me!</Button>);
    expect(screen.getByText("Click Me!")).toBeInTheDocument();
  });

  it("should call the onClick prop when clicked", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click Me!</Button>);
    userEvent.click(screen.getByText("Click Me!"));
    expect(onClick).toHaveBeenCalled();
  });
});
