import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("Given an App component", () => {
  describe("With an h1 title", () => {
    test("Should render App title", () => {
      const ret = render(<App />);
      expect(ret.container.querySelector("h1")).toHaveTextContent(
        "Welcome to Chess online"
      );
      expect(ret.container.querySelector("h2")).toHaveTextContent(
        "Theme picker"
      );
    });
  });
});
