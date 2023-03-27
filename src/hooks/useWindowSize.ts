import { useState, useEffect } from 'react'

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    function onResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.outerHeight,
      })
    }

    window.addEventListener('resize', onResize)

    onResize()

    return () => window.removeEventListener('resize', onResize)
  }, [])

  return windowSize
}
