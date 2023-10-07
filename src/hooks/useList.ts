import { useCallback, useState } from 'react'

export function useList(defaultList = []) {
  const [list, setList] = useState(defaultList)

  const set = useCallback((l) => {
    setList(l)
  }, [])

  const push = useCallback((element) => {
    setList((l) => [...l, element])
  }, [])

  const removeAt = useCallback((index) => {
    setList((l) => [...l.slice(0, index), ...l.slice(index + 1)])
  }, [])

  const insertAt = useCallback((index, element) => {
    setList((l) => [...l.slice(0, index), element, ...l.slice(index)])
  }, [])

  const updateAt = useCallback((index, element) => {
    setList((l) => l.map((e, i) => (i === index ? element : e)))
  }, [])

  const clear = useCallback(() => setList([]), [])

  return [list, { set, push, removeAt, insertAt, updateAt, clear }]
}
