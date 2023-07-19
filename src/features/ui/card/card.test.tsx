import React from "react";
import { render, screen } from "@testing-library/react";
import { Card } from "./card.component";

describe("Card", () => {
  it("should render the children inside the card", () => {
    const text = "Hello World";
    render(<Card>{text}</Card>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});