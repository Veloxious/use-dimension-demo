import { useState, useLayoutEffect, useEffect } from "react";

function useDimensions(reference, watcher = true) {
  const [dimensions, setDimensions] = useState({});
  const useLayoutHookBasedOnEnvironment =
    typeof window === "undefined" ? useEffect : useLayoutEffect;

  useLayoutHookBasedOnEnvironment(() => {
    if (!reference) {
      return;
    }

    const measure = () =>
      window.requestAnimationFrame(() =>
        setDimensions(reference.current.getBoundingClientRect().toJSON())
      );
    measure();

    if (watcher) {
      if ("ResizeObserver" in window) {
        const resizeObserver = new ResizeObserver(measure);
        resizeObserver.observe(reference.current);

        return resizeObserver.disconnect;
      } else {
        window.addEventListener("resize", measure);

        return () => window.removeEventListener("resize", measure);
      }
    }
  }, [reference, watcher]);

  return [dimensions];
}

export default useDimensions;
