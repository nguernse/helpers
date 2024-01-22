import findTownJudge from "./findTownJudge";

describe("Find Town Judge", () => {
  it.each([
    { input: { n: 2, trust: [[1, 2]] }, output: 2 },
    {
      input: {
        n: 3,
        trust: [
          [1, 3],
          [2, 3],
        ],
      },
      output: 3,
    },
    {
      input: {
        n: 3,
        trust: [
          [1, 3],
          [2, 3],
          [3, 1],
        ],
      },
      output: -1,
    },
    {
      input: {
        n: 3,
        trust: [
          [1, 2],
          [2, 3],
        ],
      },
      output: -1,
    },
    {
      input: {
        n: 1,
        trust: [],
      },
      output: 1,
    },
    {
      input: {
        n: 2,
        trust: [],
      },
      output: -1,
    },
  ])(
    `findTownJudge($input.n, $input.trust) => $output`,
    ({ input: { n, trust }, output }) => {
      const result = findTownJudge(n, trust);

      expect(result).toBe(output);
    }
  );
});
