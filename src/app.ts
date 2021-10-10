import { Type } from '@sinclair/typebox'
import fastify from 'fastify'
import * as uuid from 'uuid'

import type { Static } from '@sinclair/typebox'

import { logger } from '@libs'
import { hookOnResponse, hookOnSend, hookPreHandler } from '@middlewares'

const server = fastify({
  logger,
  disableRequestLogging: true,
  genReqId: () => uuid.v4(),
})

server.addContentTypeParser(
  'application/json',
  { parseAs: 'string' },
  (req, body, done) => {
    try {
      const json = JSON.parse(body as string)
      done(null, json)
    } catch (err) {
      err.statusCode = 400
      done(err, undefined)
    }
  },
)

server.addHook('preHandler', hookPreHandler)
server.addHook('onSend', hookOnSend)
server.addHook('onResponse', hookOnResponse)

const User = Type.Object({
  name: Type.String(),
  mail: Type.Optional(Type.String({ format: 'email' })),
})
type UserType = Static<typeof User>

interface test {
  Body: UserType
  Headers: {
    'x-s': string
  }
  Querystring: {
    username: string
    password: string
  }
  // Reply: UserType
}

// const a = {
//   schema: {
//     body: User,
//     response: {
//       200: User,
//     },
//   },
// }

server.post<test>('/test/:id', async (req, reply) => {
  reply.status(200).send({ name: 'ccc', mail: 'xxx' })
})

export { server }
