import { createLogger, format, transports } from 'winston';

export const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.colorize(),
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(({ timestamp, level, message, ...rest }) => {
      if (Object.keys(rest).length) {
        return `${timestamp} ${level}: ${message} ${JSON.stringify(rest, null, 2)}`;
      }

      return `${timestamp} ${level}: ${message}`;
    }),
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined.log' }),
  ],
});
