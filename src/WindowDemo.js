import useWindowSize from "./useWindowSize";

const WindowDemo = () => {
  const windowSize = useWindowSize()
 
  return (
    <div>
      <h1>Window Demo</h1>
      <div
        style={{
          margin: "20px auto",
          border: "1px solid red",
          width: `${windowSize.width/4}px`,
          height: `${windowSize.height/4}px`,
        }}
      >
        <p>yo</p>
        <p>{JSON.stringify(windowSize)}</p>
      </div>
    </div>
  );
};

export default WindowDemo;
