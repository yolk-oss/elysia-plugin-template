import { Elysia } from 'elysia'
import { plugin } from '../src'

new Elysia()
  .use(plugin())
  .get('/', ({ plugin }) => plugin)
  .listen(8080, ({ url }) => {
    console.log(`Listening on ${url}`)
  })
