import Config from '../../config';

/**
 * Returns the project configuration (consisting of the base configuration provided by seed.config.ts and the additional
 * project specific overrides as defined in project.config.ts)
 */
export function templateLocals() {
  const envConfig = Config.getPluginConfig('environment-config');
  if (!envConfig) {
    throw new Error('Invalid configuration name');
  }

  return Object.assign(Config, {
    ENV_CONFIG: JSON.stringify(envConfig)
  });
}
