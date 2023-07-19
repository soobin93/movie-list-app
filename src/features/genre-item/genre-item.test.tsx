import React from 'react';
import { render, screen } from "@testing-library/react";
import { GenreItem } from "./genre-item.component";

describe("GenreItem component", () => {
  const defaultProps = {
    id: 1,
    name: "Action",
  };

  it("renders properly", () => {
    const { container } = render(<GenreItem {...defaultProps} />);
    expect(container).toBeInTheDocument();
  });

  it('should render the correct id and name', () => {
    render(<GenreItem id={1} name="Fiction" />);
    const messageElement = screen.getByText('1: Fiction');
    expect(messageElement).toBeInTheDocument();
  });
});