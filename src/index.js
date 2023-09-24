/*
 * This code imports all of the hooks in the hooks directory, and exports them.
 * This file is used by the build system to create an entry point for the hooks.
 */

export { useOnClickOutside } from './hooks/useOnClickOutside'
export { useDebug } from './hooks/use-debug'
export { useDocumentReadyState } from './hooks/use-document-ready-state'
export { useFrame } from './hooks/use-frame'
export { useInterval } from './hooks/useInterval'
export { useIsClient } from './hooks/useIsClient'
export { useIsTouchDevice } from './hooks/use-is-touch-device'
export { useIsVisible } from './hooks/use-is-visible'
export { useMediaQuery } from './hooks/use-media-query'
export { useRect } from './hooks/use-rect'
export { useSlots } from './hooks/use-slots'
export { useWindowSize } from './hooks/useWindowSize'
export { useIntersectionObserver } from './hooks/useIntersectionObserver'
export { useIsomorphicLayoutEffect } from './hooks/useIsomorphicLayoutEffect'
export { useCopyToClipboard } from './hooks/useCopyToClipboard'
export { useEventListener } from './hooks/useEventListener'
export { useDebounce } from './hooks/useDebounce'
export { useEffectOnce } from './hooks/useEffectOnce'

export { useFirstMountState } from './hooks/useFirstMountState'
export { useUpdateEffect } from './hooks/useUpdateEffect'
export { useIsMounted } from './hooks/useIsMounted'
export { useLocalStorage } from './hooks/useLocalStorage'
export { useSessionStorage } from './hooks/useSessionStorage'
export { useFoucFix } from './hooks/useFoucFix'

export { useIOSToolbarState } from './hooks/useIOSToolbarState'
export { useScript } from './hooks/useScript'
