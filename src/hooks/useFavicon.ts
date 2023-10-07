import { useEffect } from 'react'

export function useFavicon(url: string) {
  useEffect(() => {
    const link: Element | any = document.querySelector("link[rel*='icon']") || document.createElement('link')
    link.type = 'image/x-icon'
    link.rel = 'shortcut icon'
    link.href = url
    document.getElementsByTagName('head')[0].appendChild(link)
  }, [url])
}
