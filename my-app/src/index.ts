import { Hono } from 'hono'

const app = new Hono()

  app.get('/pokemon/:025', (c) => {
    return c.text(`This Pokemon is Pikachu. Number 025.`)
  })

export default app
