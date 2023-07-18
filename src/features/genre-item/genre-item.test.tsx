import { render } from "@testing-library/react";
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
});
