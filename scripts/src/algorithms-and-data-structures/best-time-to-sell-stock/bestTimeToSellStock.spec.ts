import bestTimeToSellStock from "./bestTimeToSellStock";

describe("bestTimeToSellStock", () => {
  it("prices [7,1,5,3,6,4] -> 5", () => {
    const input = [7, 1, 5, 3, 6, 4];
    const result = bestTimeToSellStock(input);

    // Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
    // Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
    expect(result).toBe(5);
  });

  it("prices [7,6,4,3,1] -> 0", () => {
    const input = [7, 6, 4, 3, 1];
    const result = bestTimeToSellStock(input);

    // Explanation: In this case, no transactions are done and the max profit = 0.
    expect(result).toBe(0);
  });

  it("prices [2, 2, 2, 2, 1, 8] -> 7", () => {
    const input = [2, 2, 2, 2, 1, 8];
    const result = bestTimeToSellStock(input);

    // Explanation: In this case, buy with price at 1, sell at price of 8 for a profit of 7
    expect(result).toBe(7);
  });

  it("prices [] -> 0", () => {
    const input: number[] = [];
    const result = bestTimeToSellStock(input);

    // Explanation: In this case, no way to sell for a profit
    expect(result).toBe(0);
  });

  it("prices [1] -> 0", () => {
    const input = [1];
    const result = bestTimeToSellStock(input);

    // Explanation: In this case, no way to sell for a profit
    expect(result).toBe(0);
  });
});
