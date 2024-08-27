import { type RefObject, useEffect, useState } from 'react';

export function useIsVisible(ref: RefObject<Element>) {
  const [isIntersected, setIntersected] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if ((entry as IntersectionObserverEntry)?.isIntersecting) {
          setIntersected(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersected;
}
