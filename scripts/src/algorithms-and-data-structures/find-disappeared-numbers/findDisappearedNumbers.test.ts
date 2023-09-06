import findDisappearedNumbers from "./findDisappearedNumbers";

describe("findDisappearedNumbers", () => {
  it("should return [2] for [1,1]", () => {
    const result = findDisappearedNumbers([1, 1]);
    const expected = [2];

    expect(result).toEqual(expected);
  });
  it("should return [5,6] for [4,3,2,7,8,2,3,1]", () => {
    const result = findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);

    expect(result).toEqual([5, 6]);
  });
  it("should return [8] for [1,2,3,4,5,6,7,7]", () => {
    const result = findDisappearedNumbers([1, 2, 3, 4, 5, 6, 7, 7]);

    expect(result).toEqual([8]);
  });
});
