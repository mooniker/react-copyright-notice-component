import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act, shallow } from "react-dom/test-utils";
import CopyrightYearSpan, { coerceYear } from "./CopyrightYearSpan";

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

// export function coerceYear(input) {
//   if (input instanceof Date) {
//     return String(input.getFullYear());
//   }
//   if (typeof input === "number" && input > 0) {
//     return String(input);
//   }
//   if (typeof input === "string" && /\d{4}/.test(input)) {
//     return input;
//   }
//   throw new Error(
//     "Invalid copyright year. Must be string matching YYYY pattern, a positive integer, or a valid Date."
//   );
// }

describe("coerceYear", () => {
  test("should return the full year of a given date as string", () => {
    const now = new Date();
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
  });

  test("should accept integer 1999 and render it as copyright year", () => {
    act(() => {
      render(<CopyrightYearSpan year={1999}></CopyrightYearSpan>, container);
    });
    expect(container.textContent).toBe("1999");
  });

  test("should accept string 1999 and render it as copyright year", () => {
    act(() => {
      render(<CopyrightYearSpan year="1999"></CopyrightYearSpan>, container);
    });
    expect(container.textContent).toBe("1999");
  });

  // test("should accept current Date and render current year", () => {
  //   const now = new Date();
  //   act(() => {
  //     render(<CopyrightYearSpan year={now}></CopyrightYearSpan>, container);
  //   });
  //   const span = container.querySelector("span");
  //   console.log({
  //     actual: container.textContent,
  //     span
  //   });
  //   expect(container.textContent).toBe();
  // });

  // test("should accept year as YYYY-formatted string", () => {
  //   act(() => {
  //     render(<CopyrightYearSpan year="1999"></CopyrightYearSpan>, container);
  //   });
  //   expect(container.textContent).toBe("1999");
  // });

  // test("should accept four-digit integer as YYYY-formatted year", () => {
  //   act(() => {
  //     render(<CopyrightYearSpan year="1999"></CopyrightYearSpan>, container);
  //   });
  //   expect(container.textContent).toBe("1999");
  // });

  // const now = new Date();
  // const currentYear = now.getFullYear();

  // test("should accept JavaScript Date object", () => {
  //   act(() => {
  //     render(<CopyrightYearSpan years={now}></CopyrightYearSpan>, container);
  //   });
  //   expect(container.textContent).toBe(now.getFullYear());
  // });

  // test("should accept JavaScript Date object", () => {
  //   act(() => {
  //     render(<CopyrightYearSpan years={now}></CopyrightYearSpan>, container);
  //   });
  //   expect(container.textContent).toBe(currentYear);
  // });
});
