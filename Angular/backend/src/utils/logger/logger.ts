import { isProd } from '@app/config/environment';
import { createLogger, LoggerOptions, transports, Logger, format } from 'winston';


const { combine, timestamp, colorize, json, prettyPrint, printf } = format;

// Customize console format
const consoleFormat = printf(msg => {
  return `${msg.timestamp} [${msg.level}]: ${msg.message}`
    + `${msg.stack ? `\n${msg.stack}` : ''}`;
});

// Set logger options
const options: LoggerOptions = {

  transports: [
    // - Write logs to console depending env
    new transports.Console({
      level: isProd() ? 'info' : 'silly',
      format: combine(timestamp(), colorize(), consoleFormat)
    }),

    // - Write all logs with level 'info' and below to 'all.log'
    new transports.File({
      maxFiles: 5,
      maxsize: 1024 * 1024, // 1 MB
      filename: `logs/all.log`,
      format: combine(timestamp(), json(), prettyPrint()),
    }),

    // - Write all errors to 'error.log'.
    new transports.File({
      level: 'error',
      maxFiles: 5,
      maxsize: 1024 * 1024, // 1 MB
      filename: `logs/errors.log`,
      format: combine(timestamp(), json(), prettyPrint()),
    })
  ],

  exceptionHandlers: [
    // - Write all exceptions to 'exceptions.log'
    new transports.File({
      maxFiles: 5,
      maxsize: 1024 * 1024, // 1 MB
      filename: `logs/exceptions.log`,
      format: combine(timestamp(), json(), prettyPrint()),
    })
  ]
};


const logger: Logger = createLogger(options);
export { logger };
