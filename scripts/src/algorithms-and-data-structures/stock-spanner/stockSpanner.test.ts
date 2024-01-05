import StockSpanner from "./stockSpanner";

describe("Stock Spanner", () => {
  it.each([
    { input: [100], output: [1] },
    { input: [103, 102, 101, 100], output: [1, 1, 1, 1] },
    { input: [100, 80, 60, 70, 60, 75, 85], output: [1, 1, 1, 2, 1, 4, 6] },
  ])("stockSpanner($input) => $output", ({ input, output }) => {
    const stockSpanner = new StockSpanner();

    for (let i = 0; i < input.length; i += 1) {
      const stockPrice = input[i];
      const result = stockSpanner.next(stockPrice);

      expect(result).toBe(output[i]);
    }
  });
});
