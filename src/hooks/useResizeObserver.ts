import { debounce } from '../utils'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

/**
 * useResizeObserver - observe elements dimensions using ResizeObserver
 * @param {Boolean} lazy - should return a state or not
 * @param {Number} debounce - minimum delay between two ResizeObserver computations
 * @param {String} box - ResizeObserver parameter
 * @param {Function} callback - called on value change
 */

interface ResizeObserverProps {
  lazy?: boolean
  debounce?: number
  box?: ResizeObserverBoxOptions
  callback?: (entry: ResizeObserverEntry) => void
}

type UseResizeObserverReturn = [
  (element: HTMLElement | null) => void,
  ResizeObserverEntry | (() => ResizeObserverEntry | undefined)
]

export function useResizeObserver({
  lazy = false,
  debounce: debounceDelay = 500,
  box = 'border-box',
  callback = () => {},
}: ResizeObserverProps = {}): UseResizeObserverReturn {
  const entryRef = useRef<ResizeObserverEntry | null>(null)
  const [entry, setEntry] = useState<ResizeObserverEntry>(null)
  const [element, setElement] = useState<Element | null>(null)
  const needsUpdateRef = useRef(false)

  const debouncedSetEntry = useMemo(() => debounce(setEntry, debounceDelay), [debounceDelay])

  const onResize = useCallback(
    ([entry]: ResizeObserverEntry[]) => {
      entryRef.current = entry

      callback(entry)

      if (!lazy) {
        if (needsUpdateRef.current) {
          setEntry(entry)
        } else {
          debouncedSetEntry(entry)
        }
      }

      needsUpdateRef.current = false
    },
    [lazy, debouncedSetEntry, callback]
  )

  useEffect(() => {
    if (!element) return

    needsUpdateRef.current = true // set to true to force update on first render when element has changed

    const resizeObserver = new ResizeObserver(onResize)
    resizeObserver.observe(element, { box })

    return () => {
      resizeObserver.disconnect()
      debouncedSetEntry.cancel()
    }
  }, [element, debounceDelay, box, onResize, debouncedSetEntry])

  const get = useCallback(() => entryRef.current, [])

  return [setElement, lazy ? get : entry]
}
