import pino from "pino";

export const logger = pino({
    level: process.env.LOG_LEVEL || "info",
    timestamp: pino.stdTimeFunctions.isoTime,
    base:{
        service: "lambda-upload",
        environment: process.env.NODE_ENV || "development"
    }
})