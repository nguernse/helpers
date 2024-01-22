import validGraphPath from "./validGraphPath";

describe("Valid Graph Path", () => {
  it.each([
    {
      input: {
        n: 3,
        edges: [
          [0, 1],
          [1, 2],
          [2, 0],
        ],
        source: 0,
        destination: 2,
      },
      output: true,
    },
    {
      input: {
        n: 6,
        edges: [
          [0, 1],
          [0, 2],
          [3, 5],
          [5, 4],
          [4, 3],
        ],
        source: 0,
        destination: 5,
      },
      output: false,
    },
  ])(
    `validGraph(..., $input.source, $input.destination) => $output`,
    ({ input: { n, edges, source, destination }, output }) => {
      const result = validGraphPath(n, edges, source, destination);

      expect(result).toBe(output);
    }
  );
});
