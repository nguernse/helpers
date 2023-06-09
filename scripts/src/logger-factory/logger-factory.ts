import {
  typeEnvironment,
  enumEnvironments,
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
      `::${enumEnvironments.PRODUCTION}::`,
      LoggerPrefixes.WARN,
      message
    );
  }
  debug(message: string): void {}
  error(message: string): void {
    console.error(
      `${enumEnvironments.PRODUCTION}${LoggerPrefixes.ERROR}`,
      message
    );
  }
}

export class StagingLogger implements ILogger {
  info(message: string): void {}
  warn(message: string): void {
    console.warn(`${enumEnvironments.STAGING}${LoggerPrefixes.WARN}`, message);
  }
  debug(message: string): void {
    console.info(`${enumEnvironments.STAGING}${LoggerPrefixes.INFO}`, message);
  }
  error(message: string): void {
    console.error(
      `${enumEnvironments.STAGING}${LoggerPrefixes.ERROR}`,
      message
    );
  }
}

export class DevelopmentLogger implements ILogger {
  info(message: string): void {
    console.info(
      `${enumEnvironments.DEVELOPMENT}${LoggerPrefixes.INFO}`,
      message
    );
  }
  warn(message: string): void {
    console.warn(
      `${enumEnvironments.DEVELOPMENT}${LoggerPrefixes.WARN}`,
      message
    );
  }
  debug(message: string): void {
    console.debug(
      `${enumEnvironments.DEVELOPMENT}${LoggerPrefixes.DEBUG}`,
      message
    );
  }
  error(message: string): void {
    console.error(
      `${enumEnvironments.DEVELOPMENT}${LoggerPrefixes.ERROR}`,
      message
    );
  }
}

export class LoggerFactory {
  public static createLogger(env: typeEnvironment = getEnvironment()): ILogger {
    if (env === enumEnvironments.PRODUCTION) {
      return new ProductionLogger();
    }

    if (env === enumEnvironments.STAGING) {
      return new StagingLogger();
    }

    return new DevelopmentLogger();
  }
}
