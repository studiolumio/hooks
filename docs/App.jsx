import React from 'react'
import {
  useDebug,
  useDocumentReadyState,
  useFrame,
  useIsClient,
  useIsTouchDevice,
  useIsVisible,
  useMediaQuery,
} from '../src/index'

function App() {
  const isTouch = useIsTouchDevice()
  const debug = useDebug()
  const isclient = useIsClient()
  const ready = useDocumentReadyState()
  const { setRef, inView } = useIsVisible({ threshold: 0.5 })
  const isMobile = useMediaQuery('(max-width: 800px)')

  useFrame((time, deltaTime) => {
    // console.log({ time, deltaTime })
  })

  return (
    <main className="main" ref={setRef}>
      <p>is touch? {isTouch ? 'yes' : 'no'}</p>
      <p>is debug? {debug ? 'yes' : 'no'}</p>
      <p>is document ready? {ready ? 'yes' : 'no'}</p>
      <p>is in viewport? {inView ? 'yes' : 'no'}</p>
      <p>is client? {isclient ? 'yes' : 'no'}</p>
      <p>is Mobile? {isMobile ? 'yes' : 'no'}</p>
    </main>
  )
}

export default App
