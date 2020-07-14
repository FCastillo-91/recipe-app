import * as React from "react";
import Header from "./Header";
import { render } from "@testing-library/react";

describe("<Header/> panel tests", () => {

  test("should render the Header panel with given title text", function () {
    const { container } = render(<Header/>);
    expect(container).toMatchSnapshot();
  });
});
