import { useCallback, useEffect, useRef } from 'react'

/**
 *@description will return a callback that returns true if the component is mounted
 */
export function useIsMounted(): () => boolean {
  const mountedRef = useRef<boolean>(false)
  const get = useCallback(() => mountedRef.current, [])

  useEffect(() => {
    mountedRef.current = true

    return () => {
      mountedRef.current = false
    }
  }, [])

  return get
}
