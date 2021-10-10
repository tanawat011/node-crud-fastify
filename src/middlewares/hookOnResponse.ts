import type { onResponseHookHandler } from 'fastify'

export const hookOnResponse: onResponseHookHandler = (req, reply, done) => {
  const options = {
    response: {
      path: req.raw.url,
      statusCode: reply.statusCode,
      payload: reply.payload,
    },
    responseTime: reply.getResponseTime(),
  }

  req.log.info(options, 'request completed')

  done()
}
