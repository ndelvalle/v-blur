import babel from 'rollup-plugin-babel'
import filesize from 'rollup-plugin-filesize'
import resolve from 'rollup-plugin-node-resolve'
import { uglify } from 'rollup-plugin-uglify'

import pkg from './package.json'

const banner = `/**
 * Simple Vue directive to blur a specific element dynamically
 *
 * @version: ${pkg.version}
 * @author: ${pkg.author}
 */`

export default {
  input: 'lib/index.js',
  output: {
    file: 'dist/v-blur.min.js',
    format: 'umd',
    name: 'v-blur',
    banner
  },
  plugins: [
    resolve({
      mainFields: ['module', 'main', 'jsnext:main'],
      browser: true
    }),
    babel({
      babelrc: true
    }),
    uglify(),
    filesize()
  ]
}
