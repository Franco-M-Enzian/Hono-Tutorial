import { Hono } from 'hono'

const app = new Hono()

  app.get('/pokemon/top', (c) => {
    return c.text(`ポケモン管理サイトへようこそ。現在登録されているポケモンの数は1025匹です。`)
  })

  app.get('/pokemon/:id', (c) => {
    const pokemon_id = c.req.query('pokemon_id')
    const id = c.req.param('id')
    c.header('X-Message', 'Hi!')
    return c.text(`あなたが入力したポケモンの図鑑番号${pokemon_id}は全${id}匹のうちの一つです。`)
  })

export default app

// 出力例：
// http://127.0.0.1:8787/pokemon/1025?pokemon_id=1
// あなたが入力したポケモンの図鑑番号1は全1025匹のうちの一つです。
