import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Chessboard from "./index";

describe("Given an Chessboard component", () => {
  test("Should render two suites of letters for columns and two suites of numbers for rows", () => {
    const ret = render(<Chessboard />);
    expect(ret.container.querySelector(".board")).toHaveTextContent(
      "hgfedcba8877665544332211abcdefgh"
    );
  });
});
