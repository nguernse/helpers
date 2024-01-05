import baseballGame from "./baseballGame";

describe("Baseball Game", () => {
  it.each([
    { input: ["1"], output: 1 },
    { input: ["1", "C"], output: 0 },
    { input: ["1", "D"], output: 3 },
    { input: ["5", "2", "C", "D", "+"], output: 30 },
    { input: ["5", "-2", "4", "C", "D", "9", "+", "+"], output: 27 },
  ])("baseballGame($input) => $output", ({ input, output }) => {
    const result = baseballGame(input);

    expect(result).toEqual(output);
  });
});
