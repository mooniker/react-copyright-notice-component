import React from "react";

export function coerceYear(input) {
  if (input instanceof Date) {
    return String(input.getFullYear());
  }
  if (typeof input === "number" && input > 0) {
    return String(input);
  }
  if (typeof input === "string" && /^\d{4}$/.test(input)) {
    return input;
  }
  throw new Error(
    "Invalid copyright year. Must be string matching YYYY pattern, a positive integer, or a valid Date."
  );
}

export default function CopyrightYearSpan({ year }) {
  return year ? (
    <span property="dc:date" datatype="xsd:gYear">
      {coerceYear(year)}
    </span>
  ) : null;
}
