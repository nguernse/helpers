import moveZeroes from "./moveZeroes";

describe("moveZeroes", () => {
  it("should do nothing", () => {
    expect(moveZeroes([1, 2, 3])).toEqual([1, 2, 3]);
    expect(moveZeroes([])).toEqual([]);
  });
  it("should be valid", () => {
    expect(moveZeroes([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
    expect(moveZeroes([0, 0, 0, 0])).toEqual([0, 0, 0, 0]);
    expect(moveZeroes([1, 2, 3, 0, 12])).toEqual([1, 2, 3, 12, 0]);
    expect(moveZeroes([0, 1, 0, 3, 0])).toEqual([1, 3, 0, 0, 0]);
  });
});
