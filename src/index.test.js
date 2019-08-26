import { DEFAULT_COPYRIGHT_NOTICE_CLASSNAME } from "./";

describe("default className for CopyrightNotice component", () => {
  test('should be defined as "copyright-notice"', () => {
    expect(DEFAULT_COPYRIGHT_NOTICE_CLASSNAME).toBe("copyright-notice");
  });
});
