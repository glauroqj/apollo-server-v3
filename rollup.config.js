import run from '@rollup/plugin-run'
import gql from 'rollup-plugin-graphql-tag'
import alias from '@rollup/plugin-alias'
import { babel } from '@rollup/plugin-babel'

const dev = process.env.NODE_ENV !== 'production'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
  },
  plugins: [
    dev && run(),
    gql(),
    alias({
      entries:[
        {find: 'datasources', replacement: './src/datasources'},
        {find: 'typedefs', replacement: './src/typedefs'},
        {find: 'schema', replacement: './src/schema'},
        {find: 'utils', replacement: './src/utils'}
      ]
    }),
    // babel({ babelHelpers: 'bundled', babelrc: false })
  ]
}