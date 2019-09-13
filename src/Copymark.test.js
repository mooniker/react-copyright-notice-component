import React from "react";
import Copymark from "./Copymark";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

// const COPYMARK_UTF8 = "\xA9";
// const COPYMARK_UTF16 = 'x00A9'

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

describe("Copymark", () => {
  test("should render the standard copyright symbol by default", () => {
    act(() => {
      render(<Copymark />, container);
    });
    expect(container.textContent).toMatch(/\xA9/);
  });

  test("should render default copyright symbol in abbr tag with a title attribute", () => {
    act(() => {
      render(<Copymark />, container);
    });
    const abbr = container.querySelector("abbr");
    expect(abbr.getAttribute("title")).toBe("Copyright");
  });

  test("should render the standard copyright symbol if undefined mark supplied", () => {
    act(() => {
      render(<Copymark mark={undefined} />, container);
    });
    expect(container.textContent).toMatch(/\xA9/);
  });

  test("should render the word 'Copyright' instead of a symbol if null mark supplied", () => {
    act(() => {
      render(<Copymark mark={null} />, container);
    });
    expect(container.textContent).toMatch(/Copyright/);
  });

  test("should render '(c)' if mark is specified with 'false'", () => {
    act(() => {
      render(<Copymark mark={false} />, container);
    });
    expect(container.textContent).toMatch(/\(c\)/);
  });

  test("should render '(c)', requested by a 'false' mark, in abbr tag with a title attribute", () => {
    act(() => {
      render(<Copymark mark={false} />, container);
    });
    const abbr = container.querySelector("abbr");
    expect(abbr.getAttribute("title")).toBe("Copyright");
  });

  test("should render a custom string instead of a mark", () => {
    act(() => {
      render(<Copymark mark="Copr." />, container);
    });
    expect(container.textContent).toMatch(/Copr\./);
  });

  test("should render a custom string inside a span tag", () => {
    act(() => {
      render(<Copymark mark="Copr." />, container);
    });
    const span = container.querySelector("span");
    expect(span.textContent).toMatch(/Copr\./);
  });
});
