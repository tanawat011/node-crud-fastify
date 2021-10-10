import type { preHandlerHookHandler } from 'fastify'

export const hookPreHandler: preHandlerHookHandler = (req, reply, done) => {
  const options = {
    request: {
      remoteAddress: 'req.remoteAddress',
      remotePort: 'req.remotePort',
      method: req.method,
      url: req.url,
      path: 'req.path',
      headers: req.headers,
      query: req.query,
      parameters: 'req.parameters',
      params: req.params,
      body: req.body,
    },
  }

  req.log.info(options, 'incoming request')

  done()
}
