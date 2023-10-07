import React from 'react'

export function useOrientation() {
  const [orientation, setOrientation] = React.useState({
    angle: 0,
    type: 'landscape-primary',
  })

  React.useLayoutEffect(() => {
    const handleChange = () => {
      const { angle, type } = window.screen.orientation
      setOrientation({
        angle,
        type,
      })
    }

    const handle_orientationchange = () => {
      setOrientation({
        type: 'UNKNOWN',
        angle: window.orientation,
      })
    }

    if (window.screen?.orientation) {
      handleChange()
      window.screen.orientation.addEventListener('change', handleChange)
    } else {
      handle_orientationchange()
      window.addEventListener('orientationchange', handle_orientationchange)
    }

    return () => {
      if (window.screen?.orientation) {
        window.screen.orientation.removeEventListener('change', handleChange)
      } else {
        window.removeEventListener('orientationchange', handle_orientationchange)
      }
    }
  }, [])

  return orientation
}
