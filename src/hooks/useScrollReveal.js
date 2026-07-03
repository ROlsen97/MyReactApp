import { useEffect, useRef, useState } from "react";

function useScrollReveal({
  initialVisible = false,
  once = false,
  rootMargin = "0px 0px -10% 0px",
  threshold = 0.25,
} = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(initialVisible);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);

        if (once && entry.isIntersecting) {
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [initialVisible, once, rootMargin, threshold]);

  return [ref, isVisible];
}

export default useScrollReveal;
