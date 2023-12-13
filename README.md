<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: My Module
- Package name: my-module
- Description: My new Nuxt module
-->

# Nuxt Tawing Supabase Module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

My Nuxt module for doing supabase things.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)


## Features

<!-- Highlight some of the features your module provide here -->
- ⛰ &nbsp;Supabase API
- 🚠 &nbsp;For server use only.
- 🌲 &nbsp;Ethyl4lyf!

## Quick Setup

1. Add `@nuxt/tawing-supabase` dependency to your project

```bash
# Using pnpm
pnpm add @nuxt/tawing-supabase

# Using yarn
yarn add @nuxt/tawing-supabase

# Using npm
npm install @nuxt/tawing-supabase
```

2. Add `@nuxt/tawing-supabase` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    '@nuxt/tawing-supabase'
  ].
  tawingSupabase: {
    supabaseUri: 'https://some.supabase.com',
    supabaseKey: 'asd1234somesupabasekeyasd1234somesupabasekey'
  },  
})
```

or

```env
SUPABASE_URI=https://some.supabase.com
SUPABASE_KEY=asd1234somesupabasekeyasd1234somesupabasekey
```


That's it! You can now use Nuxt Tawing Supabase in your Nuxt app ✨

## Development

```js
// server/api/some/endpoint

import { client } from "@nuxt/tawing-supabase";

export default defineEventHandler(async (event) => {
  const { data } = await client.from("some_table").select().returns();
  return data;
});

```



<!-- Badges -->
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
