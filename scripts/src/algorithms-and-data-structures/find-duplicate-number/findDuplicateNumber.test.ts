import findDuplicateNumber from "./findDuplicateNumber";

describe("findDuplicateNumber", () => {
  it("should return 2 for [1,3,4,2,2]", () => {
    expect(findDuplicateNumber([1, 3, 4, 2, 2])).toBe(2);
  });
  it("should return 3 for [3,1,3,4,2]", () => {
    expect(findDuplicateNumber([3, 1, 3, 4, 2])).toBe(3);
  });
});
