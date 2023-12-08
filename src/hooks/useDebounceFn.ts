import { useEffect, useRef } from 'react'

export function useDebounceFn(fn, delay) {
  const { current } = useRef({ fn, timer: null })

  useEffect(
    function () {
      current.fn = fn
    },
    [fn]
  )

  return function (...args) {
    function tick() {
      current.timer = null
      current.fn.apply(this, args)
    }

    if (current.timer) {
      clearTimeout(current.timer)
    }

    current.timer = setTimeout(tick, delay)

    return function () {
      clearTimeout(current.timer)
    }
  }
}
