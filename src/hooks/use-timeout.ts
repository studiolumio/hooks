import { useEffect, useRef } from 'react'

export function useTimeout(callback, delay, deps = []) {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    const timeout = setTimeout(() => callbackRef.current(), delay)

    return () => {
      clearTimeout(timeout)
    }
  }, [delay, ...deps])
}
