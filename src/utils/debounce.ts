const debounce = (func, delay = 500) => {
  let inDebounce = setTimeout(() => null, 0)

  return (...args) => {
    clearTimeout(inDebounce)
    inDebounce = setTimeout(() => func(...args), delay)
  }
}

export default debounce
