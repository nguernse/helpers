import squaresOfSortedArray from "./squaresOfSortedArray";

describe("squaresOfSortedArray", () => {
  it("[-4,-1,0,3,10] should return [0,1,9,16,100]", () => {
    const input = [-4, -1, 0, 3, 10];
    const expected = [0, 1, 9, 16, 100];
    const result = squaresOfSortedArray(input);

    expect(result).toStrictEqual(expected);
  });

  it("[-7,-3,2,3,11] should return [4,9,9,49,121]", () => {
    const input = [-7, -3, 2, 3, 11];
    const expected = [4, 9, 9, 49, 121];
    const result = squaresOfSortedArray(input);

    expect(result).toStrictEqual(expected);
  });
});
