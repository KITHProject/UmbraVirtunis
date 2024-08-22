import { type RefObject, useEffect, useState } from "react"

export function useIsVisible(ref: RefObject<Element>) {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) =>
        setIntersecting((entry as IntersectionObserverEntry)?.isIntersecting),
      { threshold: 1 }
    )

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [ref])

  return isIntersecting
}
