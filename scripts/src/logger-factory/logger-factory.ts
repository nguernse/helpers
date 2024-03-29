import { EnvironmentOptions, getEnv } from "../get-environment/get-environment";

enum LoggerPrefixes {
  LOG = "log",
  INFO = "info",
  DEBUG = "debug",
  WARN = "warn",
  ERROR = "error",
}

interface ILogger {
  log(message: string): void;
  info(message: string): void;
  debug(message: string): void;
  warn(message: string): void;
  error(message: string): void;
}

export class ProductionLogger implements ILogger {
  log(message: string): void {}
  info(message: string): void {
    console.info(
      `[${EnvironmentOptions.PRODUCTION}::${LoggerPrefixes.INFO}]`,
      message
    );
  }
  warn(message: string): void {
    console.warn(
      `[${EnvironmentOptions.PRODUCTION}::${LoggerPrefixes.WARN}]`,
      message
    );
  }
  debug(message: string): void {}
  error(message: string): void {
    console.error(
      `[${EnvironmentOptions.PRODUCTION}::${LoggerPrefixes.ERROR}]`,
      message
    );
  }
}

export class StagingLogger implements ILogger {
  log(message: string): void {}
  info(message: string): void {
    console.info(
      `[${EnvironmentOptions.STAGING}::${LoggerPrefixes.INFO}]`,
      message
    );
  }
  warn(message: string): void {
    console.warn(
      `[${EnvironmentOptions.STAGING}::${LoggerPrefixes.WARN}]`,
      message
    );
  }
  debug(message: string): void {
    console.debug(
      `[${EnvironmentOptions.STAGING}::${LoggerPrefixes.DEBUG}]`,
      message
    );
  }
  error(message: string): void {
    console.error(
      `[${EnvironmentOptions.STAGING}::${LoggerPrefixes.ERROR}]`,
      message
    );
  }
}

export class DevelopmentLogger implements ILogger {
  log(message: string): void {
    console.log(
      `[${EnvironmentOptions.DEVELOPMENT}::${LoggerPrefixes.LOG}]`,
      message
    );
  }
  info(message: string): void {
    console.info(
      `[${EnvironmentOptions.DEVELOPMENT}::${LoggerPrefixes.INFO}]`,
      message
    );
  }
  warn(message: string): void {
    console.warn(
      `[${EnvironmentOptions.DEVELOPMENT}::${LoggerPrefixes.WARN}]`,
      message
    );
  }
  debug(message: string): void {
    console.debug(
      `[${EnvironmentOptions.DEVELOPMENT}::${LoggerPrefixes.DEBUG}]`,
      message
    );
  }
  error(message: string): void {
    console.error(
      `[${EnvironmentOptions.DEVELOPMENT}::${LoggerPrefixes.ERROR}]`,
      message
    );
  }
}

export class LoggerFactory {
  public static createLogger(env: string = getEnv("NODE_ENV")): ILogger {
    if (env === EnvironmentOptions.PRODUCTION) {
      return new ProductionLogger();
    }

    if (env === EnvironmentOptions.STAGING) {
      return new StagingLogger();
    }

    return new DevelopmentLogger();
  }
}
