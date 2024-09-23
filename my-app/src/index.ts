import { Hono } from 'hono'
import { basicAuth } from 'hono/basic-auth'

const app = new Hono()

  app.get('/pokemon/top', (c) => {
    return c.text(`ポケモン管理サイトへようこそ。現在登録されているポケモンの数は1025匹です。`)
  })

// 出力例：
// http://127.0.0.1:8787/pokemon/1025?pokemon_id=1
// あなたが入力したポケモンの図鑑番号1は全1025匹のうちの一つです。

  app.get('/pokemon/:id', (c) => {
    const pokemon_id = c.req.query('pokemon_id')
    const id = c.req.param('id')
    c.header('X-Message', 'Hi!')
    return c.text(`あなたが入力したポケモンの図鑑番号${pokemon_id}は全${id}匹のうちの一つです。`)
  })

// Basic認証

app.use(
  '/admin/*',
  basicAuth({
    username: 'user',
    password: 'password',
  })
)

app.get('/admin', (c) => {
  return c.text('認証されました！')
})

export default app


