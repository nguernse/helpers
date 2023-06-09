import { EnvironmentOptions } from "../get-environment/get-environment";
import {
  LoggerFactory,
  ProductionLogger,
  DevelopmentLogger,
  StagingLogger,
} from "./logger-factory";

describe("Logger Factory", () => {
  it("returns ProductionLogger", () => {
    const logger = LoggerFactory.createLogger(EnvironmentOptions.PRODUCTION);

    expect(logger).toBeInstanceOf(ProductionLogger);
  });

  it("returns DevelopmentLogger", () => {
    const logger = LoggerFactory.createLogger(EnvironmentOptions.DEVELOPMENT);
    const logger2 = LoggerFactory.createLogger(EnvironmentOptions.LOCAL);

    expect(logger).toBeInstanceOf(DevelopmentLogger);
    expect(logger2).toBeInstanceOf(DevelopmentLogger);
  });

  it("returns StagingLogger", () => {
    const logger = LoggerFactory.createLogger(EnvironmentOptions.STAGING);

    expect(logger).toBeInstanceOf(StagingLogger);
  });

  it("defaults to DevelopmentLogger", () => {
    const logger = LoggerFactory.createLogger();

    expect(logger).toBeInstanceOf(DevelopmentLogger);
  });
});
