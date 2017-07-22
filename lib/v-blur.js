const directive = {}

function setBlur (el, opacity = 0.5, filter = 1.5, transition = 'all .2s linear') {
  el.style.opacity = opacity
  el.style.filter = filter === 'none' ? filter : `blur(${filter}px)`
  el.style.transition = transition
}

function applyBlur (el, value) {
  if (!value) {
    return setBlur(el, 1, 'none', '')
  }
  
  if (value === true) {
    return setBlur(el)
  }

  if (typeof value !== 'object') {
    throw new Error('Invalid type argument')
  }

  setBlur(el, value.opacity, value.filter, value.transition)
}

directive.bind = function (el, binding) {
  applyBlur(el, binding.value)
}

directive.update = function (el, binding) {
  if (binding.value === binding.oldValue) { return }
  applyBlur(el, binding.value)
}

export default directive
