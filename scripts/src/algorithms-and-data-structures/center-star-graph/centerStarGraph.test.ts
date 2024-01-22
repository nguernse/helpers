import centerStarGraph from "./centerStarGraph";

describe("Center Star Graph", () => {
  it.each([
    {
      input: [
        [1, 2],
        [2, 3],
      ],
      output: 2,
    },
    {
      input: [
        [1, 2],
        [2, 3],
        [4, 2],
      ],
      output: 2,
    },
    {
      input: [
        [1, 2],
        [5, 1],
        [1, 3],
        [1, 4],
      ],
      output: 1,
    },
  ])(`centerStarGraph($input) => $output`, ({ input, output }) => {
    const result = centerStarGraph(input);

    expect(result).toBe(output);
  });
});
