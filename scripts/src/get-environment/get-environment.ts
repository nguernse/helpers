export enum EnvironmentOptions {
  LOCAL = "dev",
  DEVELOPMENT = "dev",
  STAGING = "staging",
  PRODUCTION = "prod",
}

/**
 * Returns value stored in environment variable with the given `name`.
 * Throws Error if no such variable or if variable undefined.
 *
 * @param name - name of variable to fetch from this process's environment.
 * @returns value
 */
export const getEnv = (name: string): string => {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing Environment Variable: process.env['${name}'].`);
  }

  return value;
};
