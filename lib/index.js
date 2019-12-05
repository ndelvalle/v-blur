import createDirective from './v-blur'

const plugin = {
  install (Vue, options) {
    Vue.directive('blur', createDirective(options))
  }
}

export default plugin
