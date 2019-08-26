import { periodAsNeededBetween as periodAsNeeded } from "./CopyrightNotice";

// const periodAsNeededBetween = (holder, rightsStatement) => {
//   if (!rightsStatement) {
//     return "";
//   }
//   if (holder.trim().endsWith(".")) {
//     return " ";
//   }
//   return ". ";
// };

describe("periodAsNeededBetween function", () => {
  test("should return empty string if no rights statement supplied", () => {
    expect(periodAsNeeded("ABC LLC")).toBe("");
  });

  test("should not include period but return a space if copyright holder string aleady ends with a period and rights statement to follow is supplied", () => {
    expect(periodAsNeeded("ABC LLC.", "All rights reserved.")).toBe(" ");
  });

  test("should return a period (if not redundant) and a space if a rights statement is supplied", () => {
    expect(periodAsNeeded("ABC LLC", "All rights reserved.")).toBe(". ");
  });
});
