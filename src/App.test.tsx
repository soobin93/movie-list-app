import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("App component", () => {
  it("renders a App component", () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });

  it("renders a heading element", () => {
    render(<App />);
    const headingElement = screen.getByText(
      /shall we find out what movie genres out there/i
    );
    expect(headingElement).toBeInTheDocument();
  });

  it("renders a load button", () => {
    render(<App />);
    const buttonElement = screen.getByText(/load movie genres/i);
    expect(buttonElement).toBeInTheDocument();
  });
});

