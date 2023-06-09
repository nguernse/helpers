import { getEnv } from "./get-environment";

describe("getEnv", () => {
  const ORIGINAL_ENVIRONMENT = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...ORIGINAL_ENVIRONMENT };
  });

  afterAll(() => {
    process.env = ORIGINAL_ENVIRONMENT;
  });

  it("getEnv('NODE_ENV') --> 'test", () => {
    const result = getEnv("NODE_ENV");

    expect(result).toBe("test");
  });

  it("getEnv('TEST_ENV') --> 'testing'", () => {
    // Set the custom env variables
    process.env.TEST_ENV = "testing";
    process.env.TEST_MESSAGE = "Hello world";
    process.env.TEST_SECRET = "123";

    const result = getEnv("TEST_ENV");
    const result1 = getEnv("TEST_MESSAGE");
    const result2 = getEnv("TEST_SECRET");

    expect(result).toBe("testing");
    expect(result1).toBe("Hello world");
    expect(result2).toBe("123");
  });

  it("getEnv('TEST_SECRET') --> throw Error", () => {
    expect(() => getEnv("TEST_SECRET")).toThrowError();
  });
});
