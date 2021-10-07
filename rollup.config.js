import run from '@rollup/plugin-run'
import gql from 'rollup-plugin-graphql-tag'
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
    // babel({ babelHelpers: 'bundled' })
  ]
}