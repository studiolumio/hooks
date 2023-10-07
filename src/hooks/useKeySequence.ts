const useKeySequence = ({ sequence, callback }) => {
  function keyMapper(options) {
    const eventType = (options && options.eventType) || 'keydown'
    const keystrokeDelay = (options && options.keystrokeDelay) || 1000
    let buffer = []
    let lastKeyTime = Date.now()

    document.addEventListener(eventType, (event) => {
      const key = event.key.toLowerCase()

      const currentTime = Date.now()

      if (currentTime - lastKeyTime > keystrokeDelay) {
        buffer = []
      }

      buffer.push(key)
      lastKeyTime = currentTime

      if (sequence === buffer.join('')) {
        callback()
      }
    })
  }

  const options = {
    eventType: 'keydown',
    keystrokeDelay: 1000,
  }

  keyMapper(options)

  return null
}

export default useKeySequence
