import { RefObject } from 'react'
import { useEventListener } from '..'

type Handler = (event: MouseEvent) => void

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler,
  mouseEvent: 'mousedown' | 'mouseup' = 'mousedown'
): void {
  useEventListener(mouseEvent, (event) => {
    const el = ref?.current
    const target = event.target

    // Do nothing if clicking ref's element or descendants.
    if (!el || !(target instanceof Node) || el.contains(target)) {
      return
    }

    handler(event)
  })
}
