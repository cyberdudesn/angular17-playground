import { Logger } from './model/logger.model';

export const LegacyLogger: Logger = {
  prefix: '[Legacy Logger]',
  log: (str) => {
    console.log(str);
  },
  clear: () => {
    console.log('Clear log!');
  },
};
