/* global describe, it, expect */

import createDirective from '../lib/v-blur'

describe('v-blur -> directive default options', () => {
  it('should use use the default configuration provided on instantiation', () => {
    const options = {
      opacity: 0.2,
      filter: 'blur(0.3px)'
    }
    const directive = createDirective(options)

    expect(typeof directive.options).toEqual('object')
    expect(directive.options.opacity).toEqual(options.opacity)
    expect(directive.options.filter).toEqual(options.filter)
  })
})