import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";

import Home from "./page";

it("should render two Turborepo logos", () => {
  render(<Home />);

  const logos = screen.getAllByAltText("Turborepo logo");

  expect(logos).toHaveLength(2);

  expect(logos[0]).toBeInTheDocument();
});
