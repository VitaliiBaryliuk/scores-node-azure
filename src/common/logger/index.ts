import * as pino from 'pino';
import configs from '../../../configs'

const options = {
  name: configs.service.name,
  level: configs.logger.level
};

export const logger = pino(options);

export const instance = (module: string) => {
  return logger.child({ module });
};
