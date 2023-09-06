import containsDuplicates from "./containsDuplicates";

describe("containsDuplicates", () => {
  it("[1,2,3] should return false", () => {
    const result = containsDuplicates([1, 2, 3]);

    expect(result).toBe(false);
  });
  it("[1,2,3,1,2,3] should return true", () => {
    const result = containsDuplicates([1, 2, 3, 1, 2, 3]);

    expect(result).toBe(true);
  });
  it("[1,2,2,2,3] should return true", () => {
    const result = containsDuplicates([1, 2, 2, 2, 3]);

    expect(result).toBe(true);
  });
});
