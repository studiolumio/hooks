import { useCallback, useEffect, useState } from 'react'

export const useIsTouchDevice = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  const check = useCallback(() => {
    let hasTouchScreen = false

    if ('maxTouchPoints' in navigator) {
      hasTouchScreen = navigator.maxTouchPoints > 0
    } else {
      const mediaQueryList = window.matchMedia('(pointer:coarse)')
      if (mediaQueryList && mediaQueryList.media === '(pointer:coarse)') {
        hasTouchScreen = !!mediaQueryList.matches
      } else {

        const UA = window.navigator.userAgent
        hasTouchScreen =
          /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) || /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
      }
    }
    if (hasTouchScreen) {
      setIsTouchDevice(true)
    } else {
      setIsTouchDevice(false)
    }
  }, [])

  const onResize = useCallback(() => {
    check()
  }, [check])

  useEffect(() => {
    onResize()
    window.addEventListener('resize', onResize, { passive: true })

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [onResize])

  return isTouchDevice
}
