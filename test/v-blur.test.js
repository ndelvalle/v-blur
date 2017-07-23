/* global describe it expect */

import directive from '../lib/v-blur'

describe('v-blur -> directive', () => {
  it('it has an bind method available', () => {
    expect(typeof directive.bind).toBe('function')
  })

  it('it has an update method available', () => {
    expect(typeof directive.update).toBe('function')
  })

  describe('bind', () => {
    it('adds a filter, transition and an opacity style if the value is truthy', () => {
      const bind = directive.bind
      const div = document.createElement('div')

      bind(div, { value: true })

      expect(div.style.opacity, 0.5)
      expect(div.style.filter, 'blur(1.5px)')
      expect(div.style.transition, 'all .2s linear')
    })

    it('adds a filter, transition and an opacity style according config argumet', () => {
      const bind = directive.bind
      const div = document.createElement('div')

      const opacity = 0.1
      const filter = 2

      bind(div, { value: { opacity, filter } })

      expect(div.style.opacity, opacity)
      expect(div.style.filter, `blur(${filter}px)`)
      expect(div.style.transition, 'all .2s linear')
    })

    it('adds a transition and remove the filter and opacity style if the value is falsy', () => {
      const bind = directive.bind
      const div = document.createElement('div')

      bind(div, { value: false })

      expect(div.style.opacity, 1)
      expect(div.style.filter, 'none')
      expect(div.style.transition, 'all .2s linear')
    })
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

    it('adds a filter, transition and an opacity style according config argumet', () => {
      const update = directive.update
      const div = document.createElement('div')

      const opacity = 0.1
      const filter = 2

      update(div, { value: { opacity, filter } })

      expect(div.style.opacity, opacity)
      expect(div.style.filter, `blur(${filter}px)`)
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
