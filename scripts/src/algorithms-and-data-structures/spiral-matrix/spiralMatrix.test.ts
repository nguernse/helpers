import spiralMatrix from "./spiralMatrix";

describe("spiralMatrix", () => {
  it("should return an empty array", () => {
    expect(spiralMatrix([])).toEqual([]);
  });

  it("should return [], for [[1]]", () => {
    expect(spiralMatrix([[1]])).toEqual([1]);
  });

  it("should return [1,2,3,6,9,8,7,4,5], for [[1,2,3],[4,5,6],[7,8,9]]", () => {
    expect(
      spiralMatrix([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
    ).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });
});
