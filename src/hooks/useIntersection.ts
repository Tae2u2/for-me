import { useEffect, useMemo, useState } from "react";

export const useIntersection = (targetRef:React.MutableRefObject<Element | null>, threshold:number) => {
    const [isVisible, setIsVisible] = useState(false);
  
    const callbackFn: IntersectionObserverCallback = (entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    };
  
    const options = useMemo(() => {
      return {
        root: null,
        rootMargin: '0px',
        threshold,
      };
    }, []);
  
    useEffect(() => {
      const observer = new IntersectionObserver(callbackFn, options);
      const currentTarget = targetRef.current;
      if (currentTarget) observer.observe(currentTarget);
  
      return () => {
        if (currentTarget) {
          observer.unobserve(currentTarget);
        }
      };
    }, [targetRef, options]);
  
    return { isVisible };
  };