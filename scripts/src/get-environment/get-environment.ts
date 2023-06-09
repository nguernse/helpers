export type NodeEnvironment = string | undefined | null;
export enum EnvironmentOptions {
  LOCAL = "dev",
  DEVELOPMENT = "dev",
  STAGING = "staging",
  PRODUCTION = "prod",
}

export const getEnvironment = (
  env: NodeEnvironment = process.env.NODE_ENV
): NodeEnvironment => env;
