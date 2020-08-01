import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act, shallow } from "react-dom/test-utils";
import CopyrightYearSpan, { coerceYear } from "./CopyrightYearSpan";

const now = new Date();
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

describe("coerceYear", () => {
  test("should return the full year of a given date as string", () => {
    expect(coerceYear(now)).toBe(now.getFullYear().toString());
  });

  test("should convert a positive integer to string", () => {
    expect(coerceYear(1999)).toBe("1999");
  });

  test("should accept a four-digit string", () => {
    expect(coerceYear("1999")).toBe("1999");
  });

  test("should reject a string of not four digits", () => {
    function ce1999() {
      return coerceYear("CE 1999");
    }
    function year199() {
      return coerceYear("199");
    }
    expect(ce1999).toThrowError();
    expect(year199).toThrowError();
  });
});

describe("CopyrightYearSpan", () => {
  test("should reject year input string not matching YYYY pattern", () => {
    expect(() =>
      shallow(<CopyrightYearSpan year="CE 1999"></CopyrightYearSpan>)
    ).toThrow();
  });

  test("should render nothing if year unspecified", () => {
    act(() => {
      render(<CopyrightYearSpan></CopyrightYearSpan>, container);
    });
    expect(container.textContent).toBe("");
    expect(container.querySelector("span")).toBeNull();
  });

  test("should accept integer 1999 and render it as copyright year", () => {
    act(() => {
      render(<CopyrightYearSpan year={1999}></CopyrightYearSpan>, container);
    });
    const span = container.querySelector("span");
    expect(span).toBeDefined();
    expect(span.textContent).toBe("1999");
  });

  test("should accept string 1999 and render it as copyright year", () => {
    act(() => {
      render(<CopyrightYearSpan year="1999"></CopyrightYearSpan>, container);
    });
    expect(container.textContent).toBe("1999");
  });

  test("should accept current Date and render current year", () => {
    act(() => {
      render(<CopyrightYearSpan year={now}></CopyrightYearSpan>, container);
    });
    const span = container.querySelector("span");
    expect(span.textContent).toBe(now.getFullYear().toString());
  });

  test("should accept year as YYYY-formatted string", () => {
    act(() => {
      render(<CopyrightYearSpan year="1999"></CopyrightYearSpan>, container);
    });
    expect(container.textContent).toBe("1999");
  });

  test("should accept four-digit integer as YYYY-formatted year", () => {
    act(() => {
      render(<CopyrightYearSpan year={1999}></CopyrightYearSpan>, container);
    });
    expect(container.textContent).toBe("1999");
  });

  test("should accept JavaScript Date object", () => {
    act(() => {
      render(<CopyrightYearSpan year={now}></CopyrightYearSpan>, container);
    });
    expect(container.textContent).toBe(now.getFullYear().toString());
  });
});
