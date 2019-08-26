import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import CopyrightNotice from "./";

const COPYMARK_UTF8 = "\xA9";
// const COPYMARK_UTF16 = 'x00A9'

const currentYear = new Date().getFullYear();
let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("CopyrightNotice component", () => {
  test("should create generic notice with current year if no props specified", () => {
    act(() => {
      render(<CopyrightNotice></CopyrightNotice>, container);
    });
    const regex = COPYMARK_UTF8 + " " + currentYear;
    expect(container.textContent).toMatch(regex);
  });

  test("should create generic notice with current year and given copyright symbol", () => {
    act(() => {
      render(<CopyrightNotice mark="(c)"></CopyrightNotice>, container);
    });
    const regex = "(c) " + currentYear;
    expect(container.textContent).toMatch(regex);
  });

  test("should create generic notice (no copyright holder named) with given year", () => {
    act(() => {
      render(<CopyrightNotice year={1999}></CopyrightNotice>, container);
    });
    const regex = COPYMARK_UTF8 + " " + 1999;
    expect(container.textContent).toMatch(regex);
  });

  const llcName = "ABC LLC";

  test("should create generic notice with current year (not specified) and given copyright holder (unspecified type)", () => {
    act(() => {
      render(
        <CopyrightNotice copyrightHolder={llcName}></CopyrightNotice>,
        container
      );
    });
    const regex = [COPYMARK_UTF8, currentYear, llcName].join(" ");
    expect(container.textContent).toMatch(regex);
  });

  test("should create notice for given copyright holder (unspecified type) and given year range", () => {
    const year = "2009";
    act(() => {
      render(
        <CopyrightNotice
          year={year}
          copyrightHolder={llcName}
        ></CopyrightNotice>,
        container
      );
    });
    const regex = [COPYMARK_UTF8, year, llcName].join(" ");
    expect(container.textContent).toMatch(regex);
  });
});
