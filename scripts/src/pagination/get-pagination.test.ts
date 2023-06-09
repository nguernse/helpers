import { getPagination, Page, Offset, IPagination } from "./get-pagination";

interface TestDataInterface {
  input: [Page?, Offset?];
  output: IPagination;
}

const testData: TestDataInterface[] = [
  {
    input: [],
    output: {
      from: 0,
      to: 9,
      offset: 10,
    },
  },
  {
    input: [0, 10],
    output: {
      from: 0,
      to: 9,
      offset: 10,
    },
  },
  {
    input: [1, 10],
    output: {
      from: 10,
      to: 19,
      offset: 10,
    },
  },
  {
    input: [2, 10],
    output: {
      from: 20,
      to: 29,
      offset: 10,
    },
  },
  {
    input: [0, 5],
    output: {
      from: 0,
      to: 4,
      offset: 5,
    },
  },
  {
    input: [0, 25],
    output: {
      from: 0,
      to: 24,
      offset: 25,
    },
  },
  {
    input: ["0", "10"],
    output: {
      from: 0,
      to: 9,
      offset: 10,
    },
  },
  {
    input: [0],
    output: {
      from: 0,
      to: 9,
      offset: 10,
    },
  },
  {
    input: [undefined, 5],
    output: {
      from: 0,
      to: 4,
      offset: 5,
    },
  },
];

describe("getPagination", () => {
  testData.forEach(({ input, output }) => {
    it(`getPagination(${input[0]}, ${input[1]}) --> {from: ${output.from}, to: ${output.to}, offest: ${output.offset}}`, () => {
      const result = getPagination(...input);

      expect(result).toMatchObject(output);
    });
  });
});
