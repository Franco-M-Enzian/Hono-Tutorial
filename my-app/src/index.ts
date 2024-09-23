import { Hono } from 'hono'

const app = new Hono()

  app.get('/', (c) => {
    return c.text(`ポケモン管理サイトへようこそ。`)
  })

export default app
