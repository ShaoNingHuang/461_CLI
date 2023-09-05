//https://www.youtube.com/watch?v=2kKeQl_m8iY&ab_channel=RichardOliverBray

import pino from 'pino';

const logger = pino({
    transport: {
        target: "pino-pretty",
        options: {
            translateTime: "SYS:dd-mm-yyyy HH:MM:ss",
            ignore: "pid,hostname",
        },
    }
});

export function logMsg(msg: string, option?: string) {
    if(option == "info" || option === undefined) {
        logger.info(msg);
    } else if(option == "error") {
        logger.error(msg);
    } else if(option == "fatal") {
        logger.fatal(msg);
    }
}

export default logger;

// notice the change from commonJS to es2020 in the tsconfig file