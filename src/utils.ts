export function debounce(func: () => void, wait: number, immediate?: boolean) {
  let timeout: number | null
  return function () {
    timeout && window.clearTimeout(timeout)
    timeout = window.setTimeout(() => {
      timeout = null
      if (!immediate) func()
    }, wait)
    if (immediate && !timeout) func()
  }
}

export function throttle(cb, ms) {
  let lastTime = 0
  return () => {
    const now = Date.now()
    if (now - lastTime >= ms) {
      cb()
      lastTime = now
    }
  }
}

export const noop = () => {}

export function on<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T['addEventListener']> | [string, Function | null, ...any]
): void {
  if (obj && obj.addEventListener) {
    obj.addEventListener(...(args as Parameters<HTMLElement['addEventListener']>))
  }
}

export function off<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T['removeEventListener']> | [string, Function | null, ...any]
): void {
  if (obj && obj.removeEventListener) {
    obj.removeEventListener(...(args as Parameters<HTMLElement['removeEventListener']>))
  }
}

export const isBrowser = typeof window !== 'undefined'

export const isNavigator = typeof navigator !== 'undefined'
