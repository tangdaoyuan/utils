import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    './src/index',
    './src/collection',
    './src/lang',
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
  alias: {
    '@': './src',
  },
})
