export type typeEnvironment = string | undefined | null;
export enum enumEnvironments {
  LOCAL = "dev",
  DEVELOPMENT = "dev",
  STAGING = "staging",
  PRODUCTION = "prod",
}

export const getEnvironment = (
  env: typeEnvironment = process.env.NODE_ENV
): typeEnvironment => env;
