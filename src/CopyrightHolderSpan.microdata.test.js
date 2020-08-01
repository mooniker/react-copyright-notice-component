import React from "react";
import CopyrightHolderSpan from "./CopyrightHolderSpan";
import { renderToString } from "react-dom/server";
import microdata from "microdata-node";

describe("microdata", () => {
  // const llcName = 'ABC LLC'
  test("should be attached to generic notice with current year and given copyright holder as person/name", () => {
    const html = renderToString(
      <CopyrightHolderSpan copyrightHolderType="person">
        Gob Bluth
      </CopyrightHolderSpan>
    );
    const json = microdata.toJson(html, { base: "http://example.com" });
    const arrayOfMatches = json.items.filter(
      ({ properties, type }) =>
        properties.name && type.includes("http://schema.org/Person")
    );
    expect(arrayOfMatches.length).toEqual(1);
  });

  test("should be attached to generic notice with current year and given copyright holder as org legal name", () => {
    const html = renderToString(
      <CopyrightHolderSpan copyrightHolderType="org:legalName">
        Bluth Company
      </CopyrightHolderSpan>
    );
    const json = microdata.toJson(html, { base: "http://example.com" });
    const arrayOfMatches = json.items.filter(
      ({ properties, type }) =>
        properties.legalName && type.includes("http://schema.org/Organization")
    );
    expect(arrayOfMatches.length).toEqual(1);
  });
});
