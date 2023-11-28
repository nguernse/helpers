import backspaceCompare from "./backspaceCompare";

describe("backspaceCompare", () => {
  it("should be false", () => {
    expect(backspaceCompare("a#c", "b")).toBe(false);
  });
  it("should be true", () => {
    expect(backspaceCompare("ab#c", "ad#c")).toBe(true);
    expect(backspaceCompare("ab##", "c#d#")).toBe(true);
  });
});
