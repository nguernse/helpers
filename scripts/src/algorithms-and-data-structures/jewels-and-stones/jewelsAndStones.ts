/**
 * You're given strings jewels representing the types of stones that are jewels,
 * and stones representing the stones you have.
 * Each character in stones is a type of stone you have.
 * You want to know how many of the stones you have are also jewels.
 *
 * Letters are case sensitive, so "a" is considered a different type of stone from "A".
 *
 * @see
 */
export default function numJewelsInStones(
  jewels: string,
  stones: string
): number {
  if (jewels.length === 0) return 0;

  const jewelSet = new Set<string>(jewels);

  let total: number = 0;
  for (let char of stones) {
    if (jewelSet.has(char)) {
      total += 1;
    }
  }

  return total;
}
