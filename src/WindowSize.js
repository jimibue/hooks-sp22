import { useState, useEffect } from "react";

const WindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  function resizeCB(){
    console.log("widow resized!!!!!");
    console.log("widow", window);
    setWindowSize({width:window.innerWidth /2, height:window.innerHeight/2})
  }

  useEffect(() => {
    console.log("adding resize listener");
    setWindowSize({width:window.innerWidth /2, height:window.innerHeight/2})
    window.addEventListener("resize", resizeCB);

    // if this component is unmounted let's remove the listener
    return () => {
      console.log("remove resize listener");
      // BUG: WANT TO REMOVE LISTENER
      window.removeEventListener("resize", resizeCB);
    };
  }, []);

  return (
    <div>
      <h1>WindowSize</h1>
      <div
        style={{
          margin: "20px auto",
          border: "1px solid black",
          width: `${windowSize.width}px`,
          height: `${windowSize.height}px`,
        }}
      >
        <p>yo</p>
        <p>{JSON.stringify(windowSize)}</p>
      </div>
    </div>
  );
};

export default WindowSize;
