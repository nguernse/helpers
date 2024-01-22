import dagGraphAllPaths from "./dagGraphAllPaths";

describe("DAG Graph All Paths", () => {
  it.each([
    {
      input: [[1, 2], [3], [3], []],
      output: [
        [0, 1, 3],
        [0, 2, 3],
      ],
    },
    {
      input: [[4, 3, 1], [3, 2, 4], [3], [4], []],
      output: [
        [0, 4],
        [0, 3, 4],
        [0, 1, 3, 4],
        [0, 1, 2, 3, 4],
        [0, 1, 4],
      ],
    },
    {
      input: [[4, 3, 1], [3, 2, 4], [], [4], []],
      output: [
        [0, 4],
        [0, 3, 4],
        [0, 1, 3, 4],
        [0, 1, 4],
      ],
    },
  ])(`dagGraphAllPaths($input) => $output`, ({ input, output }) => {
    const result = dagGraphAllPaths(input);

    expect(result).toEqual(expect.arrayContaining(output));
  });
});
