import pino from 'pino';

import { Env } from './Env';

const env = process.env.NODE_ENV;
let options = {};

if (Env.LOGTAIL_SOURCE_TOKEN) {
  options = {
    transport: {
      target: '@logtail/pino',
      options: { sourceToken: Env.LOGTAIL_SOURCE_TOKEN },
    },
  };
} else {
  options = {
    transport:
      env === 'development'
        ? {
            target: 'pino-pretty',
            options: {
              colorize: true,
            },
          }
        : undefined,
  };
}
export const logger = pino(options);
