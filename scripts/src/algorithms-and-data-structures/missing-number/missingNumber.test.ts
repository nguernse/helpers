import missingNumber from "./missingNumber";

describe("missingNumber", () => {
  it("should return 2 for [3,0,1]", () => {
    const result = missingNumber([3, 0, 1]);

    expect(result).toEqual(2);
  });
  it("should return 2 for [0,1]", () => {
    const result = missingNumber([0, 1]);

    expect(result).toEqual(2);
  });
  it("should return 8 for [9,6,4,2,3,5,7,0,1]", () => {
    const result = missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);

    expect(result).toEqual(8);
  });
  it("should return 1 for [0]", () => {
    const result = missingNumber([0]);

    expect(result).toEqual(1);
  });
  it("should return 0 for [1]", () => {
    const result = missingNumber([1]);

    expect(result).toEqual(0);
  });

  it("should return 0 for [1, 2]", () => {
    const result = missingNumber([1, 2]);

    expect(result).toEqual(0);
  });
});
