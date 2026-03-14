import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";

import Home from "./page";

it("should render More Clean logos", () => {
  render(<Home />);

  const logos = screen.getAllByAltText("More Clean Logo");

  expect(logos[0]).toBeInTheDocument();
});
