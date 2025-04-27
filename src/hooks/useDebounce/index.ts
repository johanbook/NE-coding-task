import { useEffect, useState } from "react";

function useDebounce<T>(value: T, timeoutInMs = 300): T {
  const [state, setState] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setState(value), timeoutInMs);
    return () => clearTimeout(handler);
  }, [timeoutInMs, value]);

  return state;
}

export default useDebounce;
