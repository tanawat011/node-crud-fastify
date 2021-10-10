import dotenv from 'dotenv'

import { server } from './src/app'

dotenv.config()

declare module 'fastify' {
  interface FastifyReply {
    payload: unknown
  }
}

const start = async () => {
  try {
    await server.listen(process.env.NODE_PORT)
  } catch (error) {
    server.log.error(error)
    process.exit(1)
  }
}

start()
