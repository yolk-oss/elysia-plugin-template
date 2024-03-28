import { describe, expect, it } from 'bun:test'
import { Elysia } from 'elysia'
import { treaty } from '@elysiajs/eden'
import { plugin } from '../src'

const app = new Elysia().use(plugin()).get('/', ({ plugin }) => plugin())

const api = treaty(app)

describe('elysia-plugin', () => {
  it('should return elysia-plugin', async () => {
    const { data } = await api.index.get()

    expect(data).toEqual('elysia-plugin')
  })
})
