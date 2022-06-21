import { useState, useEffect } from "react";
export default function useDebounce(initializeValue = "", replay = 1000) {
  const [debounce, setDebounce] = useState("initializeValue");
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(initializeValue);
    }, replay);
    return () => {
      clearTimeout(timer);
    };
  }, [replay, initializeValue]);
  return debounce;
}
