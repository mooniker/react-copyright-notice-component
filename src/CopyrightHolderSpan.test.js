import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act, shallow } from "react-dom/test-utils";
import CopyrightHolderSpan from "./CopyrightHolderSpan";

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

describe("CopyrightHolderSpan", () => {
  test("should render for a given person", () => {
    act(() => {
      render(
        <CopyrightHolderSpan copyrightHolderType="person">
          Michael Bluth
        </CopyrightHolderSpan>,
        container
      );
    });
    expect(container.textContent).toBe("Michael Bluth");
  });

  test("should render for a given organization", () => {
    act(() => {
      render(
        <CopyrightHolderSpan copyrightHolderType="organization">
          Bluth Company
        </CopyrightHolderSpan>,
        container
      );
    });
    expect(container.textContent).toBe("Bluth Company");
  });

  test("should render for a given organization by its alternate name", () => {
    act(() => {
      render(
        <CopyrightHolderSpan copyrightHolderType="org:alternateName">
          Bluth Company
        </CopyrightHolderSpan>,
        container
      );
    });
    expect(container.textContent).toBe("Bluth Company");
  });

  test("should render for a given organization by its alternate name", () => {
    expect(() =>
      shallow(
        <CopyrightHolderSpan copyrightHolderType="fictionalCompany">
          Bluth Company
        </CopyrightHolderSpan>
      )
    ).toThrowError();
  });
});
