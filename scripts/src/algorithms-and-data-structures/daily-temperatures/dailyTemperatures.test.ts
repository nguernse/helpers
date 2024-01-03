import dailyTemperatures from "./dailyTemperatures";

describe("dailyTemperatures", () => {
  it("[73, 74, 75, 71, 69, 72, 76, 73] => [1, 1, 4, 2, 1, 1, 0, 0]", () => {
    const input = [73, 74, 75, 71, 69, 72, 76, 73];
    const output = [1, 1, 4, 2, 1, 1, 0, 0];

    expect(dailyTemperatures(input)).toEqual(output);
  });

  it("[30, 40, 50, 60] => [1, 1, 1, 0]", () => {
    const input = [30, 40, 50, 60];
    const output = [1, 1, 1, 0];

    expect(dailyTemperatures(input)).toEqual(output);
  });

  it("[30, 60, 90] => [1, 1, 0]", () => {
    const input = [30, 60, 90];
    const output = [1, 1, 0];

    expect(dailyTemperatures(input)).toEqual(output);
  });
});
