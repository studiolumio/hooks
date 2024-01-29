import { useState } from 'react'

// Define the type for the initial value
type InitialValueType = string | number | boolean | object | null

export function useLocalStorage(key: string, initialValue: InitialValueType) {
  const [storedValue, setStoredValue] = useState<InitialValueType>(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }
    try {
      const item = window.localStorage.getItem(key)

      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setValue = (value: InitialValueType | ((val: InitialValueType) => InitialValueType)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value

      setStoredValue(valueToStore)

      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.log(error)
    }
  }

  const removeValue = () => {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem(key)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue, removeValue] as const
}
