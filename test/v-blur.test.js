/* global describe, it, expect */

import directive from '../lib/v-blur'

describe('v-blur -> directive', () => {
  it('it has an bind method available', () => {
    expect(typeof directive.bind).toBe('function')
  })

  it('it has an update method available', () => {
    expect(typeof directive.update).toBe('function')
  })

  describe('bind', () => {
    it('adds a default filter, transition and an opacity style if the binding value is truthy', () => {
      const bind = directive.bind
      const div = document.createElement('div')

      bind(div, { value: true })

      expect(div.style.opacity, 0.5)
      expect(div.style.filter, 'blur(1.5px)')
      expect(div.style.transition, 'all .2s linear')
    })

    it('removes default filter and an opacity style if the binding value is falsy', () => {
      const bind = directive.bind
      const div = document.createElement('div')

      bind(div, { value: false })

      expect(div.style.opacity, 1)
      expect(div.style.filter, 'none')
      expect(div.style.transition, 'all .2s linear')
    })

    it('adds custom filter, transition and an opacity style if the binding value is an object and isBlurred attribute is truthy', () => {
      const bind = directive.bind
      const div = document.createElement('div')

      const opacity = 0.1
      const filter = 'blur(2px)'
      const isBlurred = true

      bind(div, { value: { opacity, filter, isBlurred } })

      expect(div.style.opacity, opacity)
      expect(div.style.filter, filter)
      expect(div.style.transition, 'all .2s linear')
    })

    it('removes custom filter and opacity style if the binding value is an object and isBlurred attribute is falsy', () => {
      const bind = directive.bind
      const div = document.createElement('div')

      const opacity = 0.1
      const filter = 'blur(2px)'
      const isBlurred = false

      bind(div, { value: { opacity, filter, isBlurred } })

      expect(div.style.opacity, 1)
      expect(div.style.filter, 'none')
      expect(div.style.transition, 'all .2s linear')
    })
  })

  describe('update', () => {
    it('adds a default filter, transition and an opacity style if the binding value is truthy', () => {
      const update = directive.update
      const div = document.createElement('div')

      update(div, { value: true })

      expect(div.style.opacity, 0.5)
      expect(div.style.filter, 'blur(1.5px)')
      expect(div.style.transition, 'all .2s linear')
    })

    it('removes default filter and an opacity style if the binding value is falsy', () => {
      const update = directive.update
      const div = document.createElement('div')

      update(div, { value: false })

      expect(div.style.opacity, 1)
      expect(div.style.filter, 'none')
      expect(div.style.transition, 'all .2s linear')
    })

    it('adds custom filter, transition and an opacity style if the binding value is an object and isBlurred attribute is truthy', () => {
      const update = directive.update
      const div = document.createElement('div')

      const opacity = 0.1
      const filter = 'blur(2px)'
      const isBlurred = true

      update(div, { value: { opacity, filter, isBlurred } })

      expect(div.style.opacity, opacity)
      expect(div.style.filter, filter)
      expect(div.style.transition, 'all .2s linear')
    })

    it('removes custom filter and opacity style if the binding value is an object and isBlurred attribute is falsy', () => {
      const update = directive.update
      const div = document.createElement('div')

      const opacity = 0.1
      const filter = 'blur(2px)'
      const isBlurred = false

      update(div, { value: { opacity, filter, isBlurred } })

      expect(div.style.opacity, 1)
      expect(div.style.filter, 'none')
      expect(div.style.transition, 'all .2s linear')
    })
  })
})
