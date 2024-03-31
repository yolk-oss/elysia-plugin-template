# elysia-plugin

[![elysia][elysia-src]][elysia-href]
[![yolk-oss][yolk-src]][yolk-href]
[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![License][license-src]][license-href]
[![XO code style][code-style-src]][code-style-href]

_description_

## Installation

```bash
bun add elysia-plugin
```

## Usage

```ts
import { Elysia, t } from 'elysia'
import { plugin } from 'elysia-plugin'

const app = new Elysia()
  .use(plugin())
  .get('/', ({ plugin }) => plugin)
  .listen(8080)

console.log(`Listening on http://${app.server!.hostname}:${app.server!.port}`)
```

Checkout the [examples](./examples) and [tests](./tests) folders on github.

> [!NOTE]
> Replace `elysia-plugin`, `_description_` and `yolk-oss` globally to use this template.

> [!IMPORTANT]
> Don't forget to update [installation](#installation) and [usage](#usage) guide

## About Template

Build with:

- [xo](https://github.com/xojs/xo) is used for code linting and formating
- [bumpp](https://github.com/antfu/bumpp) is used for version bumping
- [unbuild](https://github.com/unjs/unbuild) is used for building

## License

[MIT](./LICENSE)

<!-- Badges -->

[elysia-src]: https://img.shields.io/badge/%F0%9F%A6%8A-f6f8fa?style=flat-square&label=elysia&labelColor=f06292
[elysia-href]: https://elysiajs.com/
[yolk-src]: https://img.shields.io/badge/yolk-template-blue.svg?logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDgwMCA4MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iODAwIiBmaWxsPSIjRUZFQkU4Ii8+CjxyZWN0IHg9IjQwNSIgeT0iMTI1IiB3aWR0aD0iMjcwIiBoZWlnaHQ9IjI3MCIgcng9IjYwIiBmaWxsPSIjRjRCQjI5Ii8+CjxjaXJjbGUgY3g9IjU0MCIgY3k9IjI2MCIgcj0iMTM1IiBmaWxsPSIjRjRCQjI5Ii8+Cjwvc3ZnPgo=&style=flat-square&labelColor=EFEBE8&color=F4BB29
[yolk-href]: https://github.com/yolk-oss/elysia-plugin-template
[npm-version-src]: https://img.shields.io/npm/v/elysia-plugin?style=flat-square&labelColor=EFEBE8&color=F4BB29
[npm-version-href]: https://npmjs.com/package/elysia-plugin
[npm-downloads-src]: https://img.shields.io/npm/dm/elysia-plugin?style=flat-square&labelColor=EFEBE8&color=F4BB29
[npm-downloads-href]: https://npmjs.com/package/elysia-plugin
[bundle-src]: https://img.shields.io/bundlephobia/minzip/elysia-plugin?style=flat-square&labelColor=EFEBE8&color=F4BB29&label=bundlephobia
[bundle-href]: https://bundlephobia.com/result?p=elysia-plugin
[license-src]: https://img.shields.io/github/license/yolk-oss/elysia-plugin.svg?style=flat-square&labelColor=EFEBE8&color=F4BB29
[license-href]: https://github.com/yolk-oss/elysia-plugin/blob/main/LICENSE
[code-style-src]: https://shields.io/badge/code_style-5ed9c7?style=flat-square&logo=xo&logoColor=black&color=F4BB29&labelColor=EFEBE8
[code-style-href]: https://github.com/xojs/xo
