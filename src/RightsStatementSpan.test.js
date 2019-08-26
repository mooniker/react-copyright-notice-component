import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import RightsStatementSpan, {
  DEFAULT_RIGHTS_STATEMENT
} from "./RightsStatementSpan";

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

describe("RightsStatementSpan", () => {
  test("has a default statement to use if one is requested but not specified", () => {
    expect(DEFAULT_RIGHTS_STATEMENT).toBeDefined();
    expect(DEFAULT_RIGHTS_STATEMENT).toMatch(/All rights reserved/);
  });

  test("is not rendered by default", () => {
    act(() => {
      render(<RightsStatementSpan></RightsStatementSpan>, container);
    });
    expect(container.textContent).toBe("");
  });

  test("renders default if truthy non-string `rightStatement` supplied", () => {
    act(() => {
      render(
        <RightsStatementSpan rightsStatement={true}></RightsStatementSpan>,
        container
      );
    });
    expect(container.textContent).toBe(DEFAULT_RIGHTS_STATEMENT);
  });

  test("renders a custum `rightStatement` as supplied", () => {
    const someNotAll = "Some rights reserved.";
    act(() => {
      render(
        <RightsStatementSpan
          rightsStatement={someNotAll}
        ></RightsStatementSpan>,
        container
      );
    });
    expect(container.textContent).toBe(someNotAll);
  });
});
