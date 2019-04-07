import {createLogger, Logger, transports, silly, format} from 'winston'

const myFormat = format.printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
  });

export const logger: Logger = createLogger({
    transports: [
        new transports.Console({
            level: "silly"
        })
    ],
    level: "silly",
    format: format.combine(format.colorize({}),
    format.timestamp({
        format: ""
    }),
    myFormat
    )
});
