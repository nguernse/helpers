import transposeMatrix from "./transposeMatrix";

describe("Transpose Matrix", () => {
  it.each([
    {
      input: [
        [1, 2],
        [3, 4],
      ],
      output: [
        [1, 3],
        [2, 4],
      ],
    },
    {
      input: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      output: [
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
      ],
    },
    {
      input: [
        [1, 2, 3],
        [4, 5, 6],
      ],
      output: [
        [1, 4],
        [2, 5],
        [3, 6],
      ],
    },
  ])("transposeMatrix($input) => $output", ({ input, output }) => {
    const result = transposeMatrix(input);

    expect(result).toEqual(output);
  });
});
