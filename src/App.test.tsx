import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("App component", () => {
  it("renders a heading element", () => {
    render(<App />);
    const headingElement = screen.getByText(
      /Shall we find out what movie genres out there/i
    );
    expect(headingElement).toBeInTheDocument();
  });
});

