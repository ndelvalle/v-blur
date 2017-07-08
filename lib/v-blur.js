const directive = {}

directive.update = function (el, binding) {
  el.style.opacity = binding.value ? 0.5 : 1
  el.style.filter = binding.value ? 'blur(1.5px)' : 'none'
  el.style.transition = 'all .2s linear'
}

export default directive
