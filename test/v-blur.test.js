/* global describe, it, expect */

import createDirective from '../lib/v-blur'

const directive = createDirective()

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

      expect(div.style.opacity).toBe('0.5')
      expect(div.style.filter).toBe('blur(1.5px)')
      expect(div.style.transition).toBe('all .2s linear')
    })

    it('removes default filter and an opacity style if the binding value is falsy', () => {
      const bind = directive.bind
      const div = document.createElement('div')

      bind(div, { value: false })

      expect(div.style.opacity).toBe('1')
      expect(div.style.filter).toBe('none')
      expect(div.style.transition).toBe('all .2s linear')
    })

    it('adds custom filter, transition and an opacity style if the binding value is an object and isBlurred attribute is truthy', () => {
      const bind = directive.bind
      const div = document.createElement('div')

      const opacity = '0.1'
      const filter = 'blur(2px)'
      const isBlurred = true

      bind(div, { value: { opacity, filter, isBlurred } })

      expect(div.style.opacity).toBe(opacity)
      expect(div.style.filter).toBe(filter)
      expect(div.style.transition).toBe('all .2s linear')
    })

    it('removes custom filter and opacity style if the binding value is an object and isBlurred attribute is falsy', () => {
      const bind = directive.bind
      const div = document.createElement('div')

      const opacity = '0.1'
      const filter = 'blur(2px)'
      const isBlurred = false

      bind(div, { value: { opacity, filter, isBlurred } })

      expect(div.style.opacity).toBe('1')
      expect(div.style.filter).toBe('none')
      expect(div.style.transition).toBe('all .2s linear')
    })

    it('sets pointer events and user-select styles to none if the binding value is truthy', () => {
      const bind = directive.bind
      const div = document.createElement('div')

      const isBlurred = true

      bind(div, { value: { isBlurred } })

      expect(div.style.userSelect).toBe('none')
      expect(div.style.pointerEvents).toBe('none')
    })
  })

  describe('update', () => {
    it('adds a default filter, transition and an opacity style if the binding value is truthy', () => {
      const update = directive.update
      const div = document.createElement('div')

      update(div, { value: true })

      expect(div.style.opacity).toBe('0.5')
      expect(div.style.filter).toBe('blur(1.5px)')
      expect(div.style.transition).toBe('all .2s linear')
    })

    it('removes default filter and an opacity style if the binding value is falsy', () => {
      const update = directive.update
      const div = document.createElement('div')

      update(div, { value: false })

      expect(div.style.opacity).toBe('1')
      expect(div.style.filter).toBe('none')
      expect(div.style.transition).toBe('all .2s linear')
    })

    it('adds custom filter, transition and an opacity style if the binding value is an object and isBlurred attribute is truthy', () => {
      const update = directive.update
      const div = document.createElement('div')

      const opacity = '0.1'
      const filter = 'blur(2px)'
      const isBlurred = true

      update(div, { value: { opacity, filter, isBlurred } })

      expect(div.style.opacity).toBe(opacity)
      expect(div.style.filter).toBe(filter)
      expect(div.style.transition).toBe('all .2s linear')
    })

    it('removes custom filter and opacity style if the binding value is an object and isBlurred attribute is falsy', () => {
      const update = directive.update
      const div = document.createElement('div')

      const opacity = '0.1'
      const filter = 'blur(2px)'
      const isBlurred = false

      update(div, { value: { opacity, filter, isBlurred } })

      expect(div.style.opacity).toBe('1')
      expect(div.style.filter).toBe('none')
      expect(div.style.transition).toBe('all .2s linear')
    })

    it('sets pointer events and user-select styles to defaults if the binding value is falsy', () => {
      const update = directive.update
      const div = document.createElement('div')

      update(div, { value: false })

      expect(div.style.userSelect).toBe('auto')
      expect(div.style.pointerEvents).toBe('auto')
    })
  })
})
