[![HOOKS](https://res.cloudinary.com/dmumzkthj/image/upload/v1680161585/Lumio/hooks_graph_etxfxn.png)]([hooks])

## Introduction

A collection of React hooks used at [Studio Lumio][lumio] to enhance our development workflow.

<br/>

🚩The API may be changed without prior notice.

<br/>

## Setup

```bash
$ yarn add @studio-lumio/hooks
$ npm i @studio-lumio/hooks
```

<br/>

## Features

`useOnClickOutside` – Trigger a callback when the user clicks outside a reference node.

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

`useFrame` – runs callback on every frame

`useInterval` – create and dispose intervals.

```
useInterval(() => {
    setCount(count + 1)
},1000)
// Delay in milliseconds or null to stop it
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
const { ref, inView } = useIsVisible({ threshold: 0.5, once: true, rootMargin: '0px', root: null })
```

`useMediaQuery` – css-like media query support in Javascript.

```
const match = useMediaQuery('(min-width: 1024px)')
```

`useRect` – Get getBoundingClientRect.

```
const { top, bottom } = useRect(elRef)
```

`useSlots` – A React hook for extracting the children of specified component types from a component’s children.

Parameters

    •	types (array): An array of component types to extract children from. Default: [].
    •	children (array): The children from which to extract the specified component types. Default: [].

Returns

    •	An array of children of the specified component types.

```
const Header = ({ children }) => <header>{children}</header>;
const Footer = ({ children }) => <footer>{children}</footer>;

const MyComponent = ({ children }) => {
const [headerContent, footerContent] = useSlots([Header, Footer], children);

return (
  <div>
    <div className="header-content">
      {headerContent || 'Default Header Content'}
    </div>
    <div className="footer-content">
      {footerContent || 'Default Footer Content'}
    </div>
  </div>
);
};

const App = () => (
<MyComponent>
  <Header>My Header</Header>
  <Footer>My Footer</Footer>
</MyComponent>
);

export default App;
```

`useFoucFix` – temporary fix for FOUC bug from Next js

`useWindowSize` – returns window dimensions

```
const { width, height } = useWindowSize()
```

`useIntersectionObserver` – Observe element visibility using IntersectionObserver

Parameters

    •	root (HTMLElement | null): Viewport for checking visibility.
    •	rootMargin (string): Margin around the root.
    •	threshold (number): Visibility threshold (0 to 1).
    •	once (boolean): Disconnect after first intersection.
    •	lazy (boolean): Update state lazily.
    •	callback (function): Function called on visibility change.

```
const App = () => {
  const [setElement, entry] = useIntersectionObserver({ threshold: 0.5 });

  return <div ref={setElement}>Observe me</div>;
};

```

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

`useResizeObserver` – A React hook for observing element dimensions using ResizeObserver, with optional debouncing and lazy state updates.

Parameters

    •	lazy (boolean): If true, returns a getter for the current entry instead of state. Default: false.
    •	debounce (number): Delay in ms between resize events. Default: 500.
    •	box (string): Box model to observe ('border-box', 'content-box'). Default: 'border-box'.
    •	callback (function): Called on resize with ResizeObserverEntry. Default: () => {}.

```
 const MyComponent = () => {
  const [setElement, entry] = useResizeObserver({
    debounce: 300,
    callback: (entry) => {
      console.log('Resized:', entry);
    },
  });

  useEffect(() => {
    if (entry) {
      console.log('Current entry:', entry);
    }
  }, [entry]);

  return (
    <div ref={setElement} style={{ resize: 'both', overflow: 'auto', width: 200, height: 200 }}>
      Resize me!
    </div>
  );
};
```

`useRealViewport` – Set CSS variables for viewport units on browsers.

CSS Variables

    •	--vw: Viewport width.
    •	--dvh: Dynamic viewport height.
    •	--svh: Small viewport height.
    •	--lvh: Logical viewport height (1vh).

```
const App = () => {
  useRealViewport();
  return <YourComponent />;
};
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

`useDebounce` – uses an internal timer to update the variable every x seconds (2nd parameter)

```
const [value, setValue] = useState<string>('')
const debouncedValue = useDebounce<string>(value, 500)
```

`useDebounceFn` – uses an internal timer to execute the callback function every x seconds (2nd parameter)

```
const debouncedFn = useDebounceFn(() => {
  console.log('This function is debounced!');
}, 500);

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

`useLocalStorage` – it is used similarly to the `useState` hook. It takes in 2 parameters, the key and the initial value.

```
const [value, setValue, removeValue] = useLocalStorage('valueKey', [])
```

`useSessionStorage` – pretty much the same as `useLocalStorage` just for session storage

```
const [value, setValue] = useSessionStorage('valueKey', [])
```

```
const [value, setValue] = useSessionStorage('valueKey', [])
```

```
const {isVisible} = useIOSToolbarState()
```

```
useScript(url)
```

```
useFavicon(url);
```

```
useKeySequence({ sequence: 'sequence', callback: () => console.log('yay') })
```

```
 const idle = useIdle(5000);
```

```
 useDocumentTitle('new title');
```

```
const orientation = useOrientation();
```

```
  usePageLeave(() => {
    console.log('come back')
  });
```

```
const [value, updateCookie, deleteCookie] = useCookie(cookieName: string);
```

```
export default function App() {
  const [ref, hovering] = useHover();

  return (
      <div ref={ref}>
        IsHovering? {hovering ? "Yes" : "No"}
      </div>
  );
}
```

```
  const [list, { set, push, removeAt, insertAt, updateAt, clear }] = useList([
    "one",
    "two",
    "three",
  ]);

  console.log(list)
  const random = () => {
    set([1, 2, 3])
    push([1, 2, 3])
    removeAt(1)
    insertAt(1, "okay")
    updateAt(1, "okay")
    clear()
  }
```

<br/>

## Authors

- Etuk Josiah Benjamin ([@jobenetuk](https://twitter.com/jobenetuk)) – [Studio Lumio][lumio]

<br/>

## License

[MIT (c)](https://opensource.org/licenses/MIT) [Studio Lumio][lumio].

[def]: https://github.com/studiolumio/hooks
[lumio]: https://studiolumio.com
