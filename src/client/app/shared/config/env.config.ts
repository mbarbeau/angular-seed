// Feel free to extend this interface
// depending on your app specific config.
export interface IEnvConfig {
  API?: string;
  ENV?: string;
}

export const Config: IEnvConfig = JSON.parse('<%= ENV_CONFIG %>');
