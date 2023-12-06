import productExceptSelf from "./productArrayExceptSelf";

describe("productExceptSelf", () => {
  it("productExceptSelf([1,2,3,4]) => [24, 12, 8, 6]", () => {
    expect(productExceptSelf([1, 2, 3, 4])).toStrictEqual([24, 12, 8, 6]);
  });

  it("productExceptSelf([3, 4, 5]) => [20, 15, 12]", () => {
    expect(productExceptSelf([3, 4, 5])).toStrictEqual([20, 15, 12]);
  });

  it("productExceptSelf([1, 1, 1]) => [1, 1, 1]", () => {
    expect(productExceptSelf([1, 1, 1])).toStrictEqual([1, 1, 1]);
  });

  it("productExceptSelf([1, 0, 2, 3]) => [0, 6, 0, 0]", () => {
    expect(productExceptSelf([1, 0, 2, 3])).toStrictEqual([0, 6, 0, 0]);
  });
});
