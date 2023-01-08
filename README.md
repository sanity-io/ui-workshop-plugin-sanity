# @sanity/ui-workshop-plugin-sanity

Wrap your UI workshop in the Sanity context to test your Sanity-connected components.

```sh
# Install `@sanity/ui-workshop-plugin-sanity` as dev dependency
npm install @sanity/ui-workshop-plugin-sanity -D

# Install peer dependencies
npm install @sanity/icons @sanity/ui react react-dom styled-components
```

[![npm version](https://img.shields.io/npm/v/@sanity/ui-workshop-plugin-sanity.svg?style=flat-square)](https://www.npmjs.com/package/@sanity/ui-workshop-plugin-sanity)

## Basic usage

Add the plugin to your `workshop.config.ts` (or .js) in the root of your project:

```ts
import {defineConfig} from '@sanity/ui-workshop'
import {sanity} from '@sanity/ui-workshop-plugin-sanity'
import sanityConfig from './sanity.config'

export default defineConfig({
  title: 'My UI Workshop',
  plugins: [sanity({config: sanityConfig})],
})
```

## License

[MIT](LICENSE)
