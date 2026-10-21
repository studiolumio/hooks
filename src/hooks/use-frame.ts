/**
 * Creates a requestAnimationFrame loop and manages the lifecycle of the callback.
 * @param {Function} callback - A function that is called every frame.
 * @param {Number} priority - A number that determines the order in which the callback is called.
 */
import { useEffect } from 'react'

const frameQueue = new Map()
let frameId = null
let previousTimestamp = 0

function scheduleFrame() {
  if (frameId !== null || typeof window === 'undefined') return

  frameId = window.requestAnimationFrame(tick)
}

function tick(timestamp) {
  const callbacks = Array.from(frameQueue.entries())
    .sort(([, a], [, b]) => (a.priority ?? 0) - (b.priority ?? 0))
    .map(([callback]) => callback)

  const deltaTime = previousTimestamp ? timestamp - previousTimestamp : 0
  previousTimestamp = timestamp

  callbacks.forEach((callback) => callback(timestamp, deltaTime))

  if (frameQueue.size === 0) {
    frameId = null
    previousTimestamp = 0
    return
  }

  frameId = window.requestAnimationFrame(tick)
}

export function useFrame(callback, priority = 0) {
  useEffect(() => {
    if (!callback) return undefined

    frameQueue.set(callback, { priority })
    scheduleFrame()

    return () => {
      frameQueue.delete(callback)

      if (frameQueue.size === 0 && frameId !== null) {
        window.cancelAnimationFrame(frameId)
        frameId = null
        previousTimestamp = 0
      }
    }
  }, [callback, priority])
}
