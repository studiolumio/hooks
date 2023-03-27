## Introduction

A compilation of utility react hooks we use to make our magic, heavily inspired by the SFDR Team [Studio Freight](https://studiofreight.com)

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

`useEventListener` – it does what the name says. Pass in an event and a callback functions as params

`useDebounce` – uses an internal timer to execute the callback function every x seconds (2nd parameter)

`useEffectOnce` – `useEffect` that's executed only one time, on mount.

<br/>

## Authors

- Etuk Josiah Benjamin ([@jobenetuk](https://twitter.com/jobenetuk)) – [Studio Lumio](https://studiolumio.com)

<br/>

## License

[The MIT License.](https://opensource.org/licenses/MIT)
