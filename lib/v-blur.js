const directive = {}

function setBlur(el, opacity = 1, filter = 1.5, transition = 'all .2s linear') {
  el.style.opacity = opacity
  el.style.filter = filter === 'none' ? filter : `blur(${filter}px)`
  el.style.transition = transition
}

function applyBlur(el, binding) {
  if (!binding.value) {  
    return setBlur(el, 1, 'none', '')
  }
  
  if (binding.value === true ) { 
    return setBlur(el) 
  }

  if (typeof binding.value !== 'object') {
    throw new Error('Invalid type argument')
  }

  setBlur(el, binding.value);
}

directive.bind = function (el, binding) {
  applyBlur(el, binding)
}

directive.update = function (el, binding) {
  applyBlur(el, binding)
}

export default directive
