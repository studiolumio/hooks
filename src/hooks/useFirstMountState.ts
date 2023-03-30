import { useRef } from 'react'

/**
 * @description React state hook that returns true if component is just mounted.
 */
export function useFirstMountState(): boolean {
  const isFirst = useRef(true)

  if (isFirst.current) {
    isFirst.current = false

    return true
  }

  return isFirst.current
}
