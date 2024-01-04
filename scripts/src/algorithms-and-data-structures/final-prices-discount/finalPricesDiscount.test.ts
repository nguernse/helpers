import finalPricesDiscount from "./finalPricesDiscount";

describe("Final Prices Discount", () => {
  it.each([
    { input: [], output: [] },
    { input: [1], output: [1] },
    { input: [1, 1], output: [0, 1] },
    { input: [8, 4, 6, 2, 3], output: [4, 2, 4, 2, 3] },
    { input: [1, 2, 3, 4, 5], output: [1, 2, 3, 4, 5] },
    { input: [10, 1, 1, 6], output: [9, 0, 1, 6] },
  ])('finalPricesDiscount("$input") -> $output', ({ input, output }) => {
    const result = finalPricesDiscount(input);

    expect(result).toEqual(output);
  });
});
