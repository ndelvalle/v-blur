const directive = {}

directive.blur = function (el, bindingValue) {
  if (typeof bindingValue !== 'boolean' && typeof bindingValue !== 'object') {
    throw new Error(
      'Expected directive binding value type to be a boolean or an object but found ' +
      `a ${typeof bindingValue} instead`
    )
  }

  if (typeof bindingValue === 'boolean') {
    bindingValue = { isBlurred: bindingValue }
  }

  const opacity = bindingValue.opacity || 0.5
  const filter = bindingValue.filter || 'blur(1.5px)'
  const transition = bindingValue.transition || 'all .2s linear'

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

export default directive
