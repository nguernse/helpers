import climbingStairs from "./climbingStairs";

describe("climbingStairs", () => {
  it("1 stairs -> 1 combinations", () => {
    expect(climbingStairs(1)).toBe(1);
  });
  it("2 stairs -> 2 combinations", () => {
    expect(climbingStairs(2)).toBe(2);
  });
  it("3 stairs -> 3 combinations", () => {
    expect(climbingStairs(3)).toBe(3);
  });
  it("4 stairs -> 5 combinations", () => {
    expect(climbingStairs(4)).toBe(5);
  });
  it("5 stairs -> 8 combinations", () => {
    expect(climbingStairs(5)).toBe(8);
  });
  it("6 stairs -> 13 combinations", () => {
    expect(climbingStairs(6)).toBe(13);
  });
});
