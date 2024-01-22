/**
 * In a town, there are n people labeled from 1 to n.
 * There is a rumor that one of these people is secretly the town judge.
 *
 * If the town judge exists, then:
 *  1. The town judge trusts nobody.
 *  2. Everybody (except for the town judge) trusts the town judge.
 *  3. There is exactly one person that satisfies properties 1 and 2.
 *  4. You are given an array trust where trust[i] = [ai, bi]
 *     representing that the person labeled ai trusts the person labeled bi.
 *      If a trust relationship does not exist in trust array,
 *      then such a trust relationship does not exist.
 *
 * Return the label of the town judge if the town judge exists and
 * can be identified, or return -1 otherwise.
 *
 * @see https://leetcode.com/problems/find-the-town-judge/description/
 */
export default function findTownJudge(n: number, trust: number[][]): number {
  // first person in the trust array is not a judge, since they trust someone
  // splits into two groups: trustrees, potential judges
  // if potential judge is in the trustee lists, they are no longer a judge
  const isTrusted = new Array(n).fill(0);
  const hasTrusted = new Array(n).fill(0);

  for (let item of trust) {
    const [trustee, trusted] = item;

    isTrusted[trusted - 1] += 1;
    hasTrusted[trustee - 1] += 1;
  }

  for (let i = 0; i < n; i += 1) {
    if (isTrusted[i] === n - 1 && hasTrusted[i] === 0) {
      return i + 1;
    }
  }

  return -1;
}
