import uglify from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'
import filesize from 'rollup-plugin-filesize'
import resolve from 'rollup-plugin-node-resolve'

const pkg = require('./package.json')

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
    format: 'umd'
  }, 
  moduleId: 'v-blur',
  name: 'v-blur',
  banner,
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    babel({
      babelrc: false, // jest makes use of .babelrc
      presets: ['es2015-rollup']
    }),
    uglify(),
    filesize()
  ]
}
