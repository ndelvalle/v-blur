import directive from './v-blur'

const plugin = {
  install (Vue) {
    Vue.directive('blur', directive)
  }
}

export default plugin
