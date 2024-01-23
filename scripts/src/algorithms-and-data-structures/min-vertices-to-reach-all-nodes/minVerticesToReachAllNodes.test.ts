import minVerticesToReachAllNodes from "./minVerticesToReachAllNodes";

describe("Minimum Number of Vertices to Reach All Nodes", () => {
  it.each([
    {
      input: {
        n: 6,
        edges: [
          [0, 1],
          [0, 2],
          [2, 5],
          [3, 4],
          [4, 2],
        ],
      },
      output: [0, 3],
    },
    {
      input: {
        n: 5,
        edges: [
          [0, 1],
          [2, 1],
          [3, 1],
          [1, 4],
          [2, 4],
        ],
      },
      output: [0, 2, 3],
    },
  ])(
    `minVerticesToReachAllNodes($input.n, $input.edges) => $output`,
    ({ input: { n, edges }, output }) => {
      const result = minVerticesToReachAllNodes(n, edges);

      expect(result).toEqual(output);
    }
  );
});
