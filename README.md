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

`useClickOutsideEvent` – trigger a callback when user clicks outside of a reference node.

`useDebug` – returns true if #debug is present in the url.

`useDocumentReadyState` – returns true if document is ready.

`useFrame` – use `@studio-freight/tempus` animation frame.

`useInterval` – create and dispose intervals.

`useIsClient` – returns true if window is defined.

`useIsTouchDevice` – returns true if client is using a touch-capable device.

`useIsVisible` – returns true if a reference node is in the viewport.

`useMediaQuery` – css-like media query support in Javascript.

`useRect` – getboundingclientrect

`useSlots` – brings vue `slots` to react

`useWindowSize` – returns window dimensions

`useIntersectionObserver` – detects visibility of a component on the viewport using the IntersectionObserver API

`useIsomorphicLayoutEffect` – identical to useEffect, but fires synchronously after all DOM mutations.

`useCopyToClipboard` – provides a copy method to save a string in the clipboard and the copied value

`useEventListener` – it does what the name says. Pass in an event and a callback function as the second parameter

`useDebounce` – uses an internal timer to execute the callback function every x seconds (2nd parameter)

`useEffectOnce` – `useEffect` that's executed only one time, on mount.

`useUpdateEffect` – `useEffect` that ignores the first invocation (e.g. on mount)

`useIsMounted` – it returns a callback that returns true if the component is mounted

`useFirstMountState` – it returns true if component is just mounted.

`useLocalStorage` – it is used similarly to ths `useState` hook. It takes in 2 parameters, the key and the initial value. `const [value, setValue] = useLocalStorage('valueKey', [])`

<br/>

## Authors

- Etuk Josiah Benjamin ([@jobenetuk](https://twitter.com/jobenetuk)) – [Studio Lumio][lumio]

<br/>

## License

[MIT (c)](https://opensource.org/licenses/MIT) [Studio Lumio][lumio].

[def]: https://github.com/studiolumio/hooks
[lumio]: https://studiolumio.com
[hamo]: https://github.com/studio-freight/hamo
