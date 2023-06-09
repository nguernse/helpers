import {
  NodeEnvironment,
  EnvironmentOptions,
  getEnvironment,
} from "../get-environment/get-environment";

enum LoggerPrefixes {
  INFO = "::info::",
  DEBUG = "::debug::",
  WARN = "::warn::",
  ERROR = "::error::",
}

interface ILogger {
  info(message: string): void;
  debug(message: string): void;
  warn(message: string): void;
  error(message: string): void;
}

export class ProductionLogger implements ILogger {
  info(message: string): void {}
  warn(message: string): void {
    console.warn(
      `::${EnvironmentOptions.PRODUCTION}::`,
      LoggerPrefixes.WARN,
      message
    );
  }
  debug(message: string): void {}
  error(message: string): void {
    console.error(
      `${EnvironmentOptions.PRODUCTION}${LoggerPrefixes.ERROR}`,
      message
    );
  }
}

export class StagingLogger implements ILogger {
  info(message: string): void {}
  warn(message: string): void {
    console.warn(
      `${EnvironmentOptions.STAGING}${LoggerPrefixes.WARN}`,
      message
    );
  }
  debug(message: string): void {
    console.info(
      `${EnvironmentOptions.STAGING}${LoggerPrefixes.INFO}`,
      message
    );
  }
  error(message: string): void {
    console.error(
      `${EnvironmentOptions.STAGING}${LoggerPrefixes.ERROR}`,
      message
    );
  }
}

export class DevelopmentLogger implements ILogger {
  info(message: string): void {
    console.info(
      `${EnvironmentOptions.DEVELOPMENT}${LoggerPrefixes.INFO}`,
      message
    );
  }
  warn(message: string): void {
    console.warn(
      `${EnvironmentOptions.DEVELOPMENT}${LoggerPrefixes.WARN}`,
      message
    );
  }
  debug(message: string): void {
    console.debug(
      `${EnvironmentOptions.DEVELOPMENT}${LoggerPrefixes.DEBUG}`,
      message
    );
  }
  error(message: string): void {
    console.error(
      `${EnvironmentOptions.DEVELOPMENT}${LoggerPrefixes.ERROR}`,
      message
    );
  }
}

export class LoggerFactory {
  public static createLogger(env: NodeEnvironment = getEnvironment()): ILogger {
    if (env === EnvironmentOptions.PRODUCTION) {
      return new ProductionLogger();
    }

    if (env === EnvironmentOptions.STAGING) {
      return new StagingLogger();
    }

    return new DevelopmentLogger();
  }
}
