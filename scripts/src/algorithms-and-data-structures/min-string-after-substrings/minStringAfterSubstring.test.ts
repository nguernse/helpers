import minStringAfterSubstring from "./minStringAfterSubstrings";

describe("Minimum String Length After Removing Substrings", () => {
  it.each([
    { input: "", output: 0 },
    { input: "A", output: 1 },
    { input: "AB", output: 0 },
    { input: "CD", output: 0 },
    { input: "ACDB", output: 0 },
    { input: "AAAA", output: 4 },
    { input: "AAAB", output: 2 },
    { input: "ABFCACDB", output: 2 },
    { input: "ACBBD", output: 5 },
  ])('minStringAfterSubstrings("$input") => $output', ({ input, output }) => {
    const result = minStringAfterSubstring(input);

    expect(result).toBe(output);
  });
});
