import construct2dArray from "./construct2dArray";

describe("construct2dArray", () => {
  it("should return empty array", () => {
    const result = construct2dArray([1, 2], 1, 1);

    expect(result).toEqual([]);
  });
  it("should return [[1,2],[3,4]]", () => {
    const result = construct2dArray([1, 2, 3, 4], 2, 2);

    expect(result).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });
  it("should return [[1,2,3]]", () => {
    const result = construct2dArray([1, 2, 3], 1, 3);

    expect(result).toEqual([[1, 2, 3]]);
  });
  it("should return [[1],[2],[3]]", () => {
    const result = construct2dArray([1, 2, 3], 3, 1);

    expect(result).toEqual([[1], [2], [3]]);
  });
});
