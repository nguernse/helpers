import { hello } from "./hello-world";

const prefix = "Hello";
const suffix = "!";

describe("=== Hello World ====", () => {
  test('Returns "Hello world!"', () => {
    const input = "world";

    expect(hello(input)).toBe(`${prefix} ${input}${suffix}`);
  });

  test('Returns "Hello Bob!"', () => {
    const input = "Bob";

    expect(hello(input)).toBe(`${prefix} ${input}${suffix}`);
  });
});
