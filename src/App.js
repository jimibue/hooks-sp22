import { useState } from 'react';
import './App.css';
import Counter from './Counter';
import CounterHooks from './CounterHooks';
import useWindowSize from './useWindowSize';
import WindowDemo from './WindowDemo';
import WindowSize from './WindowSize';

function App() {
  const windowSize = useWindowSize()
  const [showThings, setShowThings] = useState(true)
  // this state living in APP.js
  const [toggleCount, setToggleCount] = useState(0)
  
  const renderThings = ()=>{
    return (
      <div>
              <WindowSize />
              <WindowDemo />
        <CounterHooks />
      </div>
    )
  }
  const toggle =()=>{
    setToggleCount(toggleCount + 1)
    setShowThings(!showThings)
  }
  return (
    <div className='App' style={{border:'3px solid black'}}>
      <h1>App Component</h1>
      <p>{JSON.stringify(windowSize)}</p>

      <p>toggled {toggleCount} times</p>
      {/* <button onClick={toggle}>toggle things()</button>   */}
      <button onClick={toggle}>update toggleCount in App.js</button>  
      {/* <Counter someNumber={toggleCount}/>
       */}
  
      <hr />
      {showThings && renderThings()}
   
    </div>
  );
}

export default App;
