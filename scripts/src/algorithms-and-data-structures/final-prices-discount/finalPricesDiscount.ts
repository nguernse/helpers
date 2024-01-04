/**
 * You are given an integer array prices where prices[i] is
 * the price of the ith item in a shop.
 *
 * There is a special discount for items in the shop.
 * If you buy the ith item, then you will receive a discount equivalent
 * to prices[j] where j is the minimum index such that j > i and prices[j] <= prices[i].
 * Otherwise, you will not receive any discount at all.
 *
 * Return an integer array answer where answer[i] is
 * the final price you will pay for the ith item of the shop,
 * considering the special discount.
 *
 * @see https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/
 */
export default function finalPricesDiscount(prices: number[]): number[] {
  if (prices.length <= 1) return prices;

  const stack: number[] = [];
  const discountedPrices: number[] = new Array(prices.length);

  // find next price that is lower than current price
  // if match, calculate discounted price
  // once done going through prices, assign the remainder of prices with no discount - if the stack has items left
  prices.forEach((price, idx) => {
    while (stack.length > 0 && price <= prices[stack[stack.length - 1]]) {
      const prevIdx = stack.pop()!;

      discountedPrices[prevIdx] = prices[prevIdx] - price;
    }

    stack.push(idx);
  });

  // construct the discounted prices
  for (let i = 0; i < stack.length; i += 1) {
    discountedPrices[stack[i]] = prices[stack[i]];
  }

  return discountedPrices;
}
