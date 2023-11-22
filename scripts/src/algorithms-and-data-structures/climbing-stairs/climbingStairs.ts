/**
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 *
 * @see https://leetcode.com/problems/climbing-stairs/
 *
 * Big O(n)
 */
export default function climbingStairs(n: number): number {
  const combos: number[] = new Array(n + 1).fill(0);
  combos[0] = 1;
  combos[1] = 1;

  for (let i = 2; i <= n; i++) {
    const sum = combos[i - 1] + combos[i - 2];

    combos[i] = sum;
  }

  return combos[n];
}
