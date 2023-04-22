[![HOOKS](https://res.cloudinary.com/dmumzkthj/image/upload/v1680161585/Lumio/hooks_graph_etxfxn.png)]([hooks])

## Introduction

A compilation of react hooks we use to make our magic at [Studio Lumio][lumio], heavily inspired by the SFDR's [Hamo][hamo]

<br/>

## Setup

```bash
$ yarn add @studio-lumio/hooks
$ npm i @studio-lumio/hooks
```

<br/>

## Features

This toolkit is composed of:

`useOnClickOutside` – trigger a callback when user clicks outside of a reference node.

```
  useOnClickOutside(ref, () => console.log('clicked outside'))
```

`useDebug` – returns true if #debug is present in the url.

```
  const debug = useDebug()
```

`useDocumentReadyState` – returns true if document is ready.

```
  const ready = useDocumentReadyState()
```

`useFrame` – use `@studio-freight/tempus` animation frame.

`useInterval` – create and dispose intervals.

```
useInterval(() => {
    setCount(count + 1)
},

// Delay in milliseconds or null to stop it

1000,
)
```

`useIsClient` – returns true if window is defined.

```
  const isclient = useIsClient()
```

`useIsTouchDevice` – returns true if client is using a touch-capable device.

```
  const isTouch = useIsTouchDevice()
```

`useIsVisible` – returns true if a reference node is in the viewport.

```
  const isVisible = useIsVisible()
```

```
const { ref, inView } = useIsVisible({ threshold: 0.5, once: true, rootMargin: '0px', root: null })
```

`useMediaQuery` – css-like media query support in Javascript.

```
const match = useMediaQuery('(min-width: 1024px)')
```

`useRect` – getboundingclientrect

```
const { top, bottom } = useRect(elRef)
```

`useSlots` – brings vue `slots` to react

`useFoucFix` – temporary fix for FOUC bug from Next js

`useWindowSize` – returns window dimensions

```
const { width, height } = useWindowSize()
```

`useIntersectionObserver` – detects visibility of a component on the viewport using the IntersectionObserver API

```
const entry = useIntersectionObserver(ref, {})
```

`useIsomorphicLayoutEffect` – identical to useEffect, but fires synchronously after all DOM mutations.

```
useIsomorphicLayoutEffect(() => {
    console.log(useIsomorphicLayoutEffect)
}, [])
```

`useCopyToClipboard` – provides a copy method to save a string in the clipboard and the copied value

```
const [value, copy] = useCopyToClipboard()
const handleClick = () => {
    copy('copy me', callback)
}
 <button onClick={handleClick}>Meh</button>
```

`useEventListener` – it does what the name says. Pass in an event and a callback function as the second parameter

```
 const elRef = useRef<HTMLElement>(null)
const documentRef = useRef<Document>(document)

  // for window based event
  useEventListener('scroll', () => console.log('scroll'))

  // for document based event
  useEventListener('visibilitychange', () => console.log('visibilitychange'), documentRef)

  // for element based event
  useEventListener('click', () => console.log('clicked'), elRef)
```

`useDebounce` – uses an internal timer to execute the callback function every x seconds (2nd parameter)

```
const [value, setValue] = useState<string>('')
const debouncedValue = useDebounce<string>(value, 500)
```

`useEffectOnce` – `useEffect` that's executed only one time, on mount.

```
useEffectOnce(() => {
    console.log('Triggered only on mount')
})
```

`useUpdateEffect` – `useEffect` that ignores the first invocation (e.g. on mount)

```
useUpdateEffect(() => {
    console.log('ignores on mount', data)
}, [data])
```

`useIsMounted` – it returns a callback that returns true if the component is mounted

```
const isMounted = useIsMounted()
```

`useFirstMountState` – it returns true if component is just mounted.

```
const isFirstMountState = useFirstMountState()
```

`useLocalStorage` – it is used similarly to ths `useState` hook. It takes in 2 parameters, the key and the initial value.

```
const [value, setValue] = useLocalStorage('valueKey', [])
```

`useSessionStorage` – pretty much the same as `useLocalStorage` just for session storage

```
const [value, setValue] = useSessionStorage('valueKey', [])
```

<br/>

## Authors

- Etuk Josiah Benjamin ([@jobenetuk](https://twitter.com/jobenetuk)) – [Studio Lumio][lumio]

<br/>

## License

[MIT (c)](https://opensource.org/licenses/MIT) [Studio Lumio][lumio].

[def]: https://github.com/studiolumio/hooks
[lumio]: https://studiolumio.com
[hamo]: https://github.com/studio-freight/hamo
