import directive from './v-blur'

export const defaultOptions = {
  opacity: 0.5,
  filter: 'blur(1.5px)',
  transition: 'all .2s linear'
}

const plugin = {
  install (Vue, options) {
    if (options && typeof options === 'object') {
      Object.keys(defaultOptions).forEach((optionKey) => {
        defaultOptions[optionKey] = options[optionKey] || defaultOptions[optionKey]
      })
    }
    Vue.directive('blur', directive)
  }
}

export default plugin
