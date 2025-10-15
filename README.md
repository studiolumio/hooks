[![HOOKS](https://res.cloudinary.com/dmumzkthj/image/upload/v1680161585/Lumio/hooks_graph_etxfxn.png)]([hooks])

# @studio-lumio/hooks

A comprehensive collection of React hooks used at [Studio Lumio][lumio] to enhance development workflow and productivity.

<br/>

🚩 **Note:** The API may be changed without prior notice.

<br/>

## Installation

```bash
# Using npm
npm install @studio-lumio/hooks

# Using yarn
yarn add @studio-lumio/hooks

# Using pnpm
pnpm add @studio-lumio/hooks
```

<br/>

## Table of Contents

- [DOM & Browser Hooks](#dom--browser-hooks)
- [Event Hooks](#event-hooks)
- [State Management Hooks](#state-management-hooks)
- [Performance Hooks](#performance-hooks)
- [Lifecycle Hooks](#lifecycle-hooks)
- [Utility Hooks](#utility-hooks)
- [Viewport & Layout Hooks](#viewport--layout-hooks)
- [Storage Hooks](#storage-hooks)

<br/>

---

<br/>

## DOM & Browser Hooks

### `useDebug`

Returns `true` if `#debug` is present in the URL.

```jsx
const debug = useDebug()
```

---

### `useDocumentReadyState`

Returns `true` if the document is ready.

```jsx
const ready = useDocumentReadyState()
```

---

### `useDocumentTitle`

Dynamically sets the document title.

```jsx
useDocumentTitle('My Page Title')
```

---

### `useFavicon`

Dynamically sets the favicon URL.

```jsx
useFavicon('https://example.com/favicon.ico')
```

---

### `useIsClient`

Returns `true` if running in a client environment (window is defined).

```jsx
const isClient = useIsClient()
```

---

### `useIsTouchDevice`

Returns `true` if the client is using a touch-capable device.

```jsx
const isTouch = useIsTouchDevice()
```

---

### `useScript`

Dynamically loads an external script.

```jsx
useScript('https://example.com/script.js')
```

---

### `useOrientation`

Returns the current device orientation.

```jsx
const orientation = useOrientation()
```

---

### `usePageLeave`

Triggers a callback when the user's cursor leaves the page.

```jsx
usePageLeave(() => {
  console.log('User left the page')
})
```

---

### `useIdle`

Detects when the user has been idle for a specified duration (default: 1 minute).

```jsx
const idle = useIdle(5000) // 5 seconds
```

---

### `useIOSToolbarState`

Detects whether the iOS Safari toolbar is visible.

```jsx
const { isVisible } = useIOSToolbarState()
```

---

### `useFoucFix`

Temporary fix for Flash of Unstyled Content (FOUC) bug from Next.js.

```jsx
useFoucFix()
```

<br/>

## Event Hooks

### `useOnClickOutside`

Triggers a callback when the user clicks outside a referenced element.

```jsx
const ref = useRef()
useOnClickOutside(ref, () => console.log('Clicked outside'))
```

---

### `useEventListener`

Attaches an event listener to a target (window, document, or element).

```jsx
const elRef = useRef<HTMLElement>(null)
const documentRef = useRef<Document>(document)

// Window event
useEventListener('scroll', () => console.log('Scrolled'))

// Document event
useEventListener('visibilitychange', () => console.log('Visibility changed'), documentRef)

// Element event
useEventListener('click', () => console.log('Element clicked'), elRef)
```

---

### `useHover`

Detects hover state on an element.

```jsx
const [ref, hovering] = useHover()

return (
  <div ref={ref}>
    IsHovering? {hovering ? 'Yes' : 'No'}
  </div>
)
```

---

### `useKeySequence`

Executes a callback when a specific key sequence is typed.

```jsx
useKeySequence({ 
  sequence: 'lumio', 
  callback: () => console.log('Secret code entered!') 
})
```

<br/>

## State Management Hooks

### `useCopyToClipboard`

Provides a method to copy text to the clipboard and tracks the copied value.

```jsx
const [value, copy] = useCopyToClipboard()

const handleClick = () => {
  copy('Text to copy', () => console.log('Copied!'))
}
```

---

### `useCookie`

Manages browser cookies with get, update, and delete functionality.

```jsx
const [value, updateCookie, deleteCookie] = useCookie('myCookie')
```

---

### `useList`

Provides advanced array state management with helper methods.

```jsx
const [list, { set, push, removeAt, insertAt, updateAt, clear }] = useList([
  'one',
  'two',
  'three',
])

// Available methods
set(['new', 'array'])
push('four')
removeAt(1)
insertAt(1, 'inserted')
updateAt(1, 'updated')
clear()
```

---

### `useLazyState`

Lazy state management with a callback on state updates.

**Parameters:**
- `initialValue`: Initial state value
- `callback`: Function called on state change `(newValue, oldValue) => void`

**Returns:**
- `get`: Function to get current state
- `set`: Function to set state

```jsx
const [getState, setState] = useLazyState(0, (newValue, oldValue) => {
  console.log(`State changed from ${oldValue} to ${newValue}`)
})

setState(1)
const currentState = getState()
```

<br/>

## Performance Hooks

### `useDebounce`

Debounces a value to prevent excessive re-renders.

```jsx
const [value, setValue] = useState('')
const debouncedValue = useDebounce(value, 500)
```

---

### `useDebounceFn`

Debounces a function execution.

```jsx
const debouncedFn = useDebounceFn(() => {
  console.log('This function is debounced!')
}, 500)
```

---

### `useThrottle`

Throttles value updates to prevent excessive re-renders.

```jsx
const throttledValue = useThrottle(value, 200)
```

---

### `useFrame`

Runs a callback on every animation frame.

```jsx
useFrame(() => {
  // Runs on every frame
})
```

---

### `useTimeout`

Executes a callback after a specified delay.

```jsx
useTimeout(() => console.log('Executed after 1 second'), 1000)
```

---

### `useInterval`

Creates and manages intervals.

```jsx
useInterval(() => {
  setCount(count + 1)
}, 1000)
// Pass null as delay to stop the interval
```

<br/>

## Lifecycle Hooks

### `useEffectOnce`

Executes an effect only once on component mount.

```jsx
useEffectOnce(() => {
  console.log('Triggered only on mount')
})
```

---

### `useUpdateEffect`

Like `useEffect`, but skips the first invocation (on mount).

```jsx
useUpdateEffect(() => {
  console.log('Skips on mount', data)
}, [data])
```

---

### `useUnmount`

Runs a function when the component unmounts.

```jsx
useUnmount(() => console.log('Component unmounted'))
```

---

### `useIsMounted`

Returns a callback that returns `true` if the component is mounted.

```jsx
const isMounted = useIsMounted()
```

---

### `useFirstMountState`

Returns `true` if the component is on its first mount.

```jsx
const isFirstMount = useFirstMountState()
```

---

### `useIsomorphicLayoutEffect`

Identical to `useEffect`, but fires synchronously after all DOM mutations (uses `useLayoutEffect` on client, `useEffect` on server).

```jsx
useIsomorphicLayoutEffect(() => {
  // Synchronous after DOM mutations
}, [])
```

<br/>

## Utility Hooks

### `useSlots`

Extracts children of specified component types from a component's children.

**Parameters:**
- `types`: Array of component types to extract (default: `[]`)
- `children`: Children to extract from (default: `[]`)

**Returns:**
- Array of children of the specified component types

```jsx
const Header = ({ children }) => <header>{children}</header>
const Footer = ({ children }) => <footer>{children}</footer>

const MyComponent = ({ children }) => {
  const [headerContent, footerContent] = useSlots([Header, Footer], children)

  return (
    <div>
      <div className="header-content">
        {headerContent || 'Default Header Content'}
      </div>
      <div className="footer-content">
        {footerContent || 'Default Footer Content'}
      </div>
    </div>
  )
}

const App = () => (
  <MyComponent>
    <Header>My Header</Header>
    <Footer>My Footer</Footer>
  </MyComponent>
)
```

<br/>

## Viewport & Layout Hooks

### `useMediaQuery`

CSS-like media query support in JavaScript.

```jsx
const isDesktop = useMediaQuery('(min-width: 1024px)')
```

---

### `useWindowSize`

Returns current window dimensions.

```jsx
const { width, height } = useWindowSize()
```

---

### `useRealViewport`

Sets CSS variables for accurate viewport units across different browsers.

**CSS Variables:**
- `--vw`: Viewport width
- `--dvh`: Dynamic viewport height
- `--svh`: Small viewport height
- `--lvh`: Logical viewport height (1vh)

```jsx
const App = () => {
  useRealViewport()
  return <YourComponent />
}
```

---

### `useRect`

Gets the `getBoundingClientRect()` values of an element.

```jsx
const { top, bottom, left, right, width, height } = useRect(elRef)
```

---

### `useObjectFit`

Calculates scale factors for CSS object-fit behavior.

```jsx
const [scaleX, scaleY] = useObjectFit(
  parentWidth,
  parentHeight,
  childWidth,
  childHeight,
  'cover'
)
```

---

### `useIsVisible`

Returns `true` if a referenced element is in the viewport.

**Parameters:**
- `threshold`: Visibility threshold (0 to 1)
- `once`: Disconnect observer after first intersection
- `rootMargin`: Margin around the root
- `root`: Viewport for checking visibility

```jsx
const { ref, inView } = useIsVisible({ 
  threshold: 0.5, 
  once: true, 
  rootMargin: '0px', 
  root: null 
})
```

---

### `useIntersectionObserver`

Observes element visibility using the IntersectionObserver API.

**Parameters:**
- `root`: Viewport for checking visibility (default: `null`)
- `rootMargin`: Margin around the root (default: `'0px'`)
- `threshold`: Visibility threshold 0-1 (default: `0`)
- `once`: Disconnect after first intersection (default: `false`)
- `lazy`: Update state lazily (default: `false`)
- `callback`: Function called on visibility change

**Returns:**
- `[setElement, entry]`: Ref setter and IntersectionObserver entry

```jsx
const [setElement, entry] = useIntersectionObserver({ 
  threshold: 0.5,
  callback: (entry) => {
    console.log('Visibility changed:', entry)
  }
})

return <div ref={setElement}>Observe me</div>
```

---

### `useResizeObserver`

Observes element dimensions using ResizeObserver, with optional debouncing and lazy state updates.

**Parameters:**
- `lazy`: If `true`, returns a getter for the current entry instead of state (default: `false`)
- `debounce`: Delay in ms between resize events (default: `500`)
- `box`: Box model to observe - `'border-box'` or `'content-box'` (default: `'border-box'`)
- `callback`: Called on resize with ResizeObserverEntry (default: `() => {}`)

**Returns:**
- `[setElement, entry]`: Ref setter and ResizeObserver entry

```jsx
const [setElement, entry] = useResizeObserver({
  debounce: 300,
  callback: (entry) => {
    console.log('Resized:', entry)
  },
})

useEffect(() => {
  if (entry) {
    console.log('Current entry:', entry)
  }
}, [entry])

return (
  <div 
    ref={setElement} 
    style={{ resize: 'both', overflow: 'auto', width: 200, height: 200 }}
  >
    Resize me!
  </div>
)
```

<br/>

## Storage Hooks

### `useLocalStorage`

Manages localStorage with a useState-like API.

**Returns:**
- `[value, setValue, removeValue]`

```jsx
const [value, setValue, removeValue] = useLocalStorage('myKey', [])
```

---

### `useSessionStorage`

Manages sessionStorage with a useState-like API.

```jsx
const [value, setValue, removeValue] = useSessionStorage('myKey', [])
```

<br/>

---

<br/>

## Authors

- Etuk Josiah Benjamin ([@jobenetuk](https://twitter.com/jobenetuk)) – [Studio Lumio][lumio]

<br/>

## License

[MIT (c)](https://opensource.org/licenses/MIT) [Studio Lumio][lumio].

[def]: https://github.com/studiolumio/hooks
[lumio]: https://studiolumio.com
