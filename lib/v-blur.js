
function createDirective (opts = {}) {
  const options = Object.assign({
    opacity: 0.5,
    filter: 'blur(1.5px)',
    transition: 'all .2s linear'
  }, opts)

  // Note: We attach the options to the exposed object to allow changing the
  //       options dynamically after directive instantiation.
  const directive = {
    options
  }

  directive.blur = function (el, bindingValue) {
    if (typeof bindingValue !== 'boolean' && typeof bindingValue !== 'object') {
      throw new Error(
        'Expected directive binding value type to be a boolean or an object but found ' +
        `${typeof bindingValue} instead`
      )
    }

    if (typeof bindingValue === 'boolean') {
      bindingValue = { isBlurred: bindingValue }
    }

    const opacity = bindingValue.opacity || options.opacity
    const filter = bindingValue.filter || options.filter
    const transition = bindingValue.transition || options.transition

    el.style.opacity = bindingValue.isBlurred ? opacity : 1
    el.style.filter = bindingValue.isBlurred ? filter : 'none'
    el.style.transition = transition
  }

  directive.bind = function (el, binding) {
    directive.blur(el, binding.value)
  }

  directive.update = function (el, binding) {
    directive.blur(el, binding.value)
  }

  return directive
}

export default createDirective
