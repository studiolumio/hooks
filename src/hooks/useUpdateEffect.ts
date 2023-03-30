import { useEffect } from 'react'
import { useFirstMountState } from './useFirstMountState'

/**
 *@description React effect hook that ignores the first call (e.g. on mount)
 */
export const useUpdateEffect: typeof useEffect = (effect, deps) => {
  const isFirstMount = useFirstMountState()

  useEffect(() => {
    if (!isFirstMount) {
      return effect()
    }
  }, deps)
}
