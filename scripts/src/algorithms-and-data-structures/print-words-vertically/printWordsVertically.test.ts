import printWordsVertically from "./printWordsVertically";

describe("Print Words Vertically", () => {
  it.each([
    {
      input: "HOW ARE YOU",
      output: ["HAY", "ORO", "WEU"],
    },
    {
      input: "TO BE OR NOT TO BE",
      output: ["TBONTB", "OEROOE", "   T"],
    },
    {
      input: "CONTEST IS COMING",
      output: ["CIC", "OSO", "N M", "T I", "E N", "S G", "T"],
    },
  ])(
    "shuffleString('$input.word', '$input.indices') => $output",
    ({ input, output }) => {
      const result = printWordsVertically(input);

      expect(result).toEqual(output);
    }
  );
});
