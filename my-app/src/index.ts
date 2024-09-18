import { Hono } from 'hono'

const app = new Hono()

app.get('/Tutorial', (c) => {
  return c.text(
    'Honoのチュートリアルをしています。URLを変えることもできます。'
  )
})

export default app
