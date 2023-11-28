import isSubsequence from "./isSubsequence";

describe("isSubsequence", () => {
  it("should be true", () => {
    expect(isSubsequence("abc", "ahbgdc")).toBe(true);
    expect(isSubsequence("cool", "acbodoel")).toBe(true);
    expect(isSubsequence("abc", "abc")).toBe(true);
    expect(isSubsequence("", "abc")).toBe(true);
  });

  it("should be false", () => {
    expect(isSubsequence("axc", "ahbgdc")).toBe(false);
    expect(isSubsequence("aye", "yea")).toBe(false);
    expect(isSubsequence("abc", "")).toBe(false);
    expect(isSubsequence("abcd", "a")).toBe(false);
  });
});
