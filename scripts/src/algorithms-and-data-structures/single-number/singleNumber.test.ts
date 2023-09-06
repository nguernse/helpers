import singleNumber from "./singleNumber";

describe("singleNumber", () => {
  it("should be 1 for [2,2,1]", () => {
    const result = singleNumber([2, 2, 1]);

    expect(result).toEqual(1);
  });
  it("should be 4 for [4,1,2,1,2]", () => {
    const result = singleNumber([4, 1, 2, 1, 2]);

    expect(result).toEqual(4);
  });
  it("should be 1 for [1]", () => {
    const result = singleNumber([1]);

    expect(result).toEqual(1);
  });
});
