import { NumArray } from "./rangeSumQuery";

describe("rangeSumQuery", () => {
  const input = [-2, 0, 3, -5, 2, -1];
  const RSQ = new NumArray(input);

  it("sumRange(0, 2) should return 1", () => {
    expect(RSQ.sumRange(0, 2)).toBe(1);
  });
  it("sumRange(1, 2) should return 3", () => {
    expect(RSQ.sumRange(1, 2)).toBe(3);
  });
  it("sumRange(0, 5) should return -3", () => {
    expect(RSQ.sumRange(0, 5)).toBe(-3);
  });
});
