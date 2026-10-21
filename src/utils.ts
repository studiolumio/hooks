export function throttle(cb: { (e: any): void; (): void }, ms: number) {
  let lastTime = 0
  return () => {
    const now = Date.now()
    if (now - lastTime >= ms) {
      cb()
      lastTime = now
    }
  }
}

type DebouncedFunction<T extends (...args: any[]) => any> = T & {
  cancel: () => void
  flush: () => void
}

export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  wait: number,
  callFirst?: boolean
): DebouncedFunction<T> {
  let timeout: ReturnType<typeof setTimeout> | null = null
  let debouncedFn: (() => void) | null = null

  const clear = () => {
    if (timeout) {
      clearTimeout(timeout)
      debouncedFn = null
      timeout = null
    }
  }

  const flush = () => {
    const call = debouncedFn
    clear()
    if (call) {
      call()
    }
  }

  const debounceWrapper: any = function (this: any, ...args: any[]) {
    if (!wait) {
      return fn.apply(this, args)
    }

    const context = this
    const callNow = callFirst && !timeout
    clear()

    debouncedFn = function () {
      fn.apply(context, args)
    }

    timeout = setTimeout(() => {
      timeout = null
      if (!callNow) {
        const call = debouncedFn
        debouncedFn = null
        return call && call()
      }
    }, wait)

    if (callNow) {
      return debouncedFn()
    }
  }

  debounceWrapper.cancel = clear
  debounceWrapper.flush = flush

  return debounceWrapper
}

export const noop = () => {}

export function on<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: any[]
): void {
  if (obj && 'addEventListener' in obj) {
    obj.addEventListener.apply(obj, args)
  }
}

export function off<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: any[]
): void {
  if (obj && 'removeEventListener' in obj) {
    obj.removeEventListener.apply(obj, args)
  }
}

export const isBrowser = typeof window !== 'undefined'

export const isNavigator = typeof navigator !== 'undefined'
