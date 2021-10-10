/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { LoggerOptions } from 'pino'
import pinoLogger from 'pino'

export enum LOG_LEVEL {
  FATAL = 'fatal',
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
  DEBUG = 'debug',
  TRACE = 'trace',
}

const loggerOptions: LoggerOptions = {
  name: process.env.APP_NAME || '...',
  level: process.env.LOG_LEVEL || LOG_LEVEL.INFO,
  redact: ['headers.authorization'],
  prettyPrint: {
    colorize: true,
    crlf: true,
    errorLikeObjectKeys: ['err', 'error'],
    errorProps: '',
    levelFirst: false,
    messageKey: 'msg',
    levelKey: 'level',
    messageFormat: false,
    timestampKey: 'time',
    translateTime: 'yyyy-mm-dd HH:MM:ss.l o',
    ignore: '',
    hideObject: false,
    singleLine: false,
    customPrettifiers: {},
  },
  serializers: {
    // req(req) {
    //   return {
    //     reqId: req.id,
    //     remoteAddress: req.remoteAddress,
    //     remotePort: req.remotePort,
    //     method: req.method,
    //     url: req.url,
    //     path: req.path,
    //     headers: req.headers,
    //     query: req.query,
    //     parameters: req.parameters,
    //     params: req.params,
    //     body: req.body,
    //   }
    // },
    // res(res) {
    //   return {
    //     statusCode: res.statusCode,
    //     logNaja: 'res',
    //   }
    // },
  },
}

const logger = pinoLogger(loggerOptions)

export { logger, loggerOptions }
