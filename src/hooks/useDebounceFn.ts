import { useEffect, useRef } from 'react'

export function useDebounceFn(fn: (...args: any[]) => any, delay: number): (...args: any[]) => void {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const functionRef = useRef(fn)

  useEffect(() => {
    functionRef.current = fn
  }, [fn])

  return (...args: any[]) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      functionRef.current(...args)
    }, delay)
  }
}
