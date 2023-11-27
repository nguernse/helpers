/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 *
 * @see https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 *
 * @see https://stackoverflow.com/questions/8269916/what-is-sliding-window-algorithm-examples
 */
export default function bestTimeToSellStock(prices: number[]): number {
  if (prices.length < 2) return 0;

  let maxProfit = 0;
  let minPrice = prices[0];

  // O(n), using sliding window technique
  for (let i = 1; i < prices.length; i += 1) {
    const currentPrice = prices[i];

    maxProfit = Math.max(maxProfit, currentPrice - minPrice);
    minPrice = Math.min(minPrice, currentPrice);
  }

  // O(n^2), greedy way
  // for (let i = 0; i < prices.length; i += 1) {
  //   const buyPrice = prices[i];

  //   for (let j = i + 1; j < prices.length; j += 1) {
  //     const sellPrice = prices[j];
  //     const profit = sellPrice - buyPrice;

  //     if (profit > maxProfit) {
  //       maxProfit = profit;
  //     }
  //   }
  // }

  return maxProfit;
}
