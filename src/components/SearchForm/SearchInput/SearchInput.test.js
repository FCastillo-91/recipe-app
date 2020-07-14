import * as React from "react";
import SearchInput from "./SearchInput";
import { screen, render, cleanup } from "@testing-library/react";
import { userEvent, type } from "@testing-library/user-event";

afterEach(cleanup);

describe("SearchInput", () => {
  test("should have a title", function () {
    const { getByTestId } = render(
      <SearchInput title={"my title"} text={"my text"} />
    );
    expect(getByTestId("search-title")).toHaveTextContent("my title");
  });
  test("should have a text", function () {
    const { getByTestId } = render(
      <SearchInput title={"my title"} text={"my text"} />
    );
    expect(getByTestId("search-text")).toHaveTextContent("my text");
  });

  test("should have a button", function () {
    const { getByTestId } = render(<SearchInput />);
    screen.debug();

    const formInput = screen.getByTestId("form-control-input");
    userEvent.type(formInput, "reactjs");

    const addButton = screen.getByRole("button", { name: /Add/i });
    userEvent.click(addButton);
  });

  // test("should not submit an empty form", function () {
  //
  // });
  //
});
