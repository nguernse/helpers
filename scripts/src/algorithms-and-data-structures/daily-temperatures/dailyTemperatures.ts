/**
 * Given an array of integers temperatures represents the daily temperatures,
 * return an array answer such that answer[i] is the number of days
 * you have to wait after the ith day to get a warmer temperature.
 * If there is no future day for which this is possible, keep answer[i] == 0 instead.
 *
 * @see https://leetcode.com/problems/daily-temperatures/
 */
export default function dailyTemperatures(temperatures: number[]): number[] {
  const answer: number[] = new Array(temperatures.length).fill(0);
  const stack: number[] = [];

  for (let i = 0; i < temperatures.length; i += 1) {
    const temp = temperatures[i];

    while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temp) {
      const prevTempIndex = stack.pop();

      if (prevTempIndex !== undefined) {
        answer[prevTempIndex] = i - prevTempIndex;
      }
    }

    stack.push(i);
  }

  return answer;
}
