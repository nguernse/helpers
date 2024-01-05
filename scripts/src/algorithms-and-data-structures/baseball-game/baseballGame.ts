/**
 * You are keeping the scores for a baseball game with strange rules.
 * At the beginning of the game, you start with an empty record.
 *
 * You are given a list of strings operations,
 * where operations[i] is the ith operation you must apply
 * to the record and is one of the following:
 *
 *  - An integer x. Record a new score of x.
 *  - '+'. Record a new score that is the sum of the previous two scores.
 *  - 'D'. Record a new score that is the double of the previous score.
 *  - 'C'. Invalidate the previous score, removing it from the record.
 *
 * Return the sum of all the scores on the record after applying all the operations.
 *
 * @see https://leetcode.com/problems/baseball-game/
 */
export default function baseballGame(operations: string[]): number {
  // keep a running list of values (stack)
  // if a number 'x' add to stack (stack.push(x))
  // if '+' take the sum of the previous two elements in the stack
  // if 'D' add a new score that is the double of the previous score
  // if 'C' remove the previous score (stack.pop())
  // finally return a sum of all scores in the stack (stack.reduce())
  const stack: number[] = [];

  for (let i = 0; i < operations.length; i += 1) {
    const x: string = operations[i];

    if (x === "+") {
      // take sum of previous two scores
      stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
    } else if (x === "D") {
      // double the previous score
      stack.push(stack[stack.length - 1] * 2);
    } else if (x === "C") {
      stack.pop();
    } else {
      stack.push(parseInt(x));
    }
  }

  // return the sum of the scores
  return stack.reduce((sum, score) => sum + score, 0);
}
