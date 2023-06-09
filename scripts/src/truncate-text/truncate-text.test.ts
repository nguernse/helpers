import { maxLength, textSuffix, truncateText } from "./truncate-text";

interface TestDataInterface {
  input: [string, maxLength, textSuffix];
  output: string;
}

const testData: TestDataInterface[] = [
  {
    input: ["Hello world", undefined, undefined],
    output: "Hello world",
  },
  {
    input: ["Hello world", 5, undefined],
    output: "Hello...",
  },
  {
    input: ["Hello world", 1, "???"],
    output: "H???",
  },
  {
    input: ["Hello world", 1, ""],
    output: "H",
  },
  {
    input: ["Hello world", 25, undefined],
    output: "Hello world",
  },
];

describe("truncateText", () => {
  testData.forEach(({ input, output }) => {
    it(`${input} --> ${output}`, () => {
      const result = truncateText(...input);

      expect(result).toBe(output);
    });
  });
});
