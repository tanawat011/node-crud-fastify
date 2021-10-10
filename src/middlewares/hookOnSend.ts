import type { onSendHookHandler } from 'fastify'

export const hookOnSend: onSendHookHandler<unknown> = (
  req,
  reply,
  payload,
  done,
) => {
  if (payload) {
    try {
      Object.assign(reply, { payload: JSON.parse(`${payload}`) })
    } catch (error) {
      Object.assign(reply, { payload })
    }
  }

  done()
}
