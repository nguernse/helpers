/**
 * Design an algorithm that collects daily
 * price quotes for some stock and returns the span of that stock's
 * price for the current day.
 *
 * The span of the stock's price in one day is the maximum number
 * of consecutive days (starting from that day and going backward)
 * for which the stock price was less than or equal to the price of that day.
 *
 * For example, if the prices of the stock in the last four days is [7,2,1,2] and the price of the stock today is 2, then the span of today is 4 because starting from today, the price of the stock was less than or equal 2 for 4 consecutive days.
 * Also, if the prices of the stock in the last four days is
 * [7,34,1,2] and the price of the stock today is 8,
 * then the span of today is 3 because starting from today,
 * the price of the stock was less than or equal 8 for 3 consecutive days.
 *
 * Implement the StockSpanner class:
 *  StockSpanner() Initializes the object of the class.
 *  int next(int price) Returns the span of the stock's price given that today's price is price.
 *
 * @see https://leetcode.com/problems/online-stock-span/
 */
export default class StockSpanner {
  prices: number[];
  tracking: number[][];

  constructor() {
    this.prices = [];
    this.tracking = [];
  }
  // O(1) best case, O(n) worst case
  // This keeps track of the previous span so we do not
  // iterate through stack each time
  next(price: number) {
    let span = 1;

    while (
      this.tracking.length > 0 &&
      this.tracking[this.tracking.length - 1][0] <= price
    ) {
      const previous = this.tracking.pop()!;

      span += previous[1];
    }

    this.tracking.push([price, span]);

    return span;
  }

  // O(n) solution
  // next(price: number): number {
  //   // add new price to prices
  //   this.prices.push(price);

  //   // count consecutive days
  //   let count = 0;
  //   for (let i = this.prices.length - 1; i >= 0; i -= 1) {
  //     const currentPrice = this.prices[i];

  //     if (currentPrice <= price) {
  //       count += 1;
  //     } else {
  //       break;
  //     }
  //   }

  //   return count;
  // }
}
