import { useCallback, useEffect, useRef } from 'react'

type Callback<T> = (newValue: T, oldValue: T) => void
type SetState<T> = (value: T | ((prevState: T) => T)) => void
type GetState<T> = () => T

export function useLazyState<T>(initialValue: T, callback: Callback<T>): [GetState<T>, SetState<T>] {
  const stateRef = useRef<T>(initialValue)

  useEffect(() => {
    callback(initialValue, initialValue)
  }, [initialValue, callback])

  const set: SetState<T> = (value) => {
    if (typeof value === 'function') {
      const nextValue = (value as (prevState: T) => T)(stateRef.current)
      callback(nextValue, stateRef.current)
      stateRef.current = nextValue
      return
    }

    if (value !== stateRef.current) {
      callback(value, stateRef.current)
      stateRef.current = value
    }
  }

  const get: GetState<T> = useCallback(() => stateRef.current, [])

  return [get, set]
}
