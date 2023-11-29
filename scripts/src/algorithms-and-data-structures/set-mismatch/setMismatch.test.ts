import setMismatch from "./setMismatch";

describe("setMismatch", () => {
  it("should return [2, 3] for [1, 2, 2, 4]", () => {
    expect(setMismatch([1, 2, 2, 4])).toEqual([2, 3]);
  });

  it("should return [1, 2] for [1, 1]", () => {
    expect(setMismatch([1, 1])).toEqual([1, 2]);
  });

  it("should return [2, 1] for [2, 2]", () => {
    expect(setMismatch([2, 2])).toEqual([2, 1]);
  });

  it("should return [3, 1] for [3,2,3,4,6,5]", () => {
    expect(setMismatch([3, 2, 3, 4, 6, 5])).toEqual([3, 1]);
  });
});
