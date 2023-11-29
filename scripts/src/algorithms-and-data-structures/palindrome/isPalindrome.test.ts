import isPalindrome from "./isPalindrome";

describe("isPalindrome", () => {
  it("is palindrome", () => {
    expect(isPalindrome("a")).toBe(true);
    expect(isPalindrome(" ")).toBe(true);
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
    expect(isPalindrome("a racecar a")).toBe(true);
  });
  it("is not a palindrome", () => {
    expect(isPalindrome("abc")).toBe(false);
  });
});
