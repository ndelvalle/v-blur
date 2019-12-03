/* global describe, it, expect */

import plugin, { defaultOptions } from '../lib'
import Vue from 'vue'

describe('v-blur:index', () => {
  it('should use if there has options parameter on install', () => {
    const options = {
      opacity: 0.2,
      filter: 'blur(0.3px)'
    }
    Vue.use(plugin, options)

    expect(typeof defaultOptions).toEqual('object')
    expect(defaultOptions.opacity).toEqual(options.opacity)
    expect(defaultOptions.filter).toEqual(options.filter)
  })
})
