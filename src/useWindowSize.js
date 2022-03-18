import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    console.log('useffect in useWindowSize called')
    setWindowSize({width:window.innerWidth, height:window.innerHeight})
    window.addEventListener("resize", resizeCB);

    // if this component is unmounted let's remove the listener
    return () => {
      // BUG: WANT TO REMOVE LISTENER
      window.removeEventListener("resize", resizeCB);
    };
  }, []);
  
  function resizeCB() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  return windowSize
};

export default useWindowSize