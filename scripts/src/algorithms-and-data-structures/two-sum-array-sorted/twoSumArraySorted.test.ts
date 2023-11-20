import twoSumArraySorted from "./twoSumArraySorted";

describe("twoSumArraySorted", () => {
  it("[2,7,11,15], 9 to be [0, 1]", () => {
    const input = [2, 7, 11, 15];
    const target = 9;
    const result = twoSumArraySorted(input, target);

    expect(result).toEqual([0, 1]);
  });
  it("[2,3,4], 6 to be [1, 2]", () => {
    const input = [2, 3, 4];
    const target = 6;
    const result = twoSumArraySorted(input, target);

    expect(result).toEqual([0, 2]);
  });

  it("[-1,0], -1 to be [0, 1]", () => {
    const input = [-1, 0];
    const target = -1;
    const result = twoSumArraySorted(input, target);

    expect(result).toEqual([0, 1]);
  });
});
