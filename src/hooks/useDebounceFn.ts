import { useEffect, useRef } from 'react'

export function useDebounceFn(fn: (...args: any[]) => any, delay: number) {
  const current = useRef<{ fn: (...args: any[]) => any; timer: NodeJS.Timeout | null }>({ fn, timer: null })

  useEffect(
    function () {
      current.current.fn = fn
    },
    [fn]
  )

  return function (...args: any[]) {
    function tick() {
      current.current.timer = null
      current.current.fn.apply(this, args)
    }

    if (current.current.timer) {
      clearTimeout(current.current.timer)
    }

    current.current.timer = setTimeout(tick, delay)

    return function () {
      if (current.current.timer) {
        clearTimeout(current.current.timer)
      }
    }
  }
}
