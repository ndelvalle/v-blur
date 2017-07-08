/* global describe it expect */

import directive from '../lib/v-blur'

describe('v-blur -> directive', () => {
  it('it has an update method available', () => {
    expect(typeof directive.update).toBe('function')
  })

  describe('update', () => {
    it('adds a filter, transition and an opacity style if the value is truthy', () => {
      const update = directive.update
      const div = document.createElement('div')

      update(div, { value: true })

      expect(div.style.opacity, 0.5)
      expect(div.style.filter, 'blur(1.5px)')
      expect(div.style.transition, 'all .2s linear')
    })

    it('adds a transition and remove the filter and opacity style if the value is falsy', () => {
      const update = directive.update
      const div = document.createElement('div')

      update(div, { value: false })

      expect(div.style.opacity, 1)
      expect(div.style.filter, 'none')
      expect(div.style.transition, 'all .2s linear')
    })
  })
})
