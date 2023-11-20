import twoSumArray from "./twoSumArray";

describe("twoSumArray", () => {
  it("[2,7,11,15], 9 to be [0, 1]", () => {
    const input = [2, 7, 11, 15];
    const target = 9;
    const result = twoSumArray(input, target);

    expect(result).toEqual([0, 1]);
  });
  it("[3,2,4], 6 to be [1, 2]", () => {
    const input = [3, 2, 4];
    const target = 6;
    const result = twoSumArray(input, target);

    expect(result).toEqual([1, 2]);
  });
});
