import {
  palindromeDynamicProgramming,
  palindromeInnerExpansion,
} from "./palindromeSubstrings";

describe("palindromeSubstrings", () => {
  describe("palindromeInnerExpansion", () => {
    it('should return 3 for "abc"', () => {
      expect(palindromeInnerExpansion("abc")).toBe(3);
    });

    it('should return 6 for "aaa"', () => {
      expect(palindromeInnerExpansion("aaa")).toBe(6);
    });

    it('should return 10 for "racecar"', () => {
      expect(palindromeInnerExpansion("racecar")).toBe(10);
    });

    it('should return 4 for "aba"', () => {
      expect(palindromeInnerExpansion("aba")).toBe(4);
    });

    it('should return 1 for "a"', () => {
      expect(palindromeInnerExpansion("a")).toBe(1);
    });
  });

  describe("palindromeDynamic", () => {
    it('should return 3 for "abc"', () => {
      expect(palindromeDynamicProgramming("abc")).toBe(3);
    });

    it('should return 6 for "aaa"', () => {
      expect(palindromeDynamicProgramming("aaa")).toBe(6);
    });

    it('should return 10 for "racecar"', () => {
      expect(palindromeDynamicProgramming("racecar")).toBe(10);
    });

    it('should return 4 for "aba"', () => {
      expect(palindromeDynamicProgramming("aba")).toBe(4);
    });

    it('should return 1 for "a"', () => {
      expect(palindromeDynamicProgramming("a")).toBe(1);
    });
  });
});
