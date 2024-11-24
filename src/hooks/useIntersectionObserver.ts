import { useCallback, useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverProps {
  root?: HTMLElement | null
  rootMargin?: string
  threshold?: number
  once?: boolean
  lazy?: boolean
  callback?: (entry: IntersectionObserverEntry) => void
}

type UseIntersectionObserverReturn = [
  (element: HTMLElement | null) => void,
  IntersectionObserverEntry | (() => IntersectionObserverEntry | undefined) | any
]

/**
 * useIntersectionObserver - A React hook that observes element visibility using IntersectionObserver.
 * @param {object} props - Configuration options
 * @param {HTMLElement} props.root - The element that is used as the viewport for checking visibility.
 * @param {string} props.rootMargin - Margin around the root.
 * @param {number} props.threshold - Number from 0 to 1 indicating the percentage of the target's visibility.
 * @param {boolean} props.once - Whether to disconnect after first intersection.
 * @param {boolean} props.lazy - Whether to update state lazily.
 * @param {function} props.callback - Function to call when the intersection changes.
 * @param {array} deps - Dependency array for the effect.
 * @returns {array} [setElement, entry]
 */

export function useIntersectionObserver(
  {
    root = null,
    rootMargin = '0px',
    threshold = 0,
    once = false,
    lazy = false,
    callback = () => {},
  }: UseIntersectionObserverProps = {},
  deps: any[] = []
): UseIntersectionObserverReturn {
  const entryRef = useRef<IntersectionObserverEntry>()
  const [entry, setEntry] = useState<IntersectionObserverEntry>()
  const [element, setElement] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (!element) return

    const intersection = new IntersectionObserver(
      ([entry]) => {
        if (lazy) {
          entryRef.current = entry
        } else {
          setEntry(entry)
        }

        callback(entry)

        if (once && entry.isIntersecting) intersection.disconnect()
      },
      {
        root,
        rootMargin,
        threshold,
      }
    )
    intersection.observe(element)

    return () => {
      intersection.disconnect()
    }
  }, [element, root, rootMargin, threshold, lazy, once, ...deps])

  const get = useCallback(() => entryRef.current, [])

  return [setElement, lazy ? get : entry]
}
