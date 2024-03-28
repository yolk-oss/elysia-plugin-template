import Elysia from 'elysia'

export const plugin = () =>
  new Elysia({ name: 'elysia-plugin' }).decorate(
    'plugin',
    () => 'elysia-plugin',
  )
