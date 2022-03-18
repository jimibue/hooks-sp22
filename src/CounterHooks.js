import { useEffect, useState, useContext } from "react";

// hooks: are a new feature in react > 16.8
// hooks a way to create resuable code, functionality in react
// rules to hooks
// 1. can only use hooks in functional components /functions
// 2. hooks always start with the 'use' word
// 3. hooks must be used at top level of function
      // can't nest a hook in a function, if statement. etc
// useEffect, useState, useContext and other are defined by react and come standard
// you/3rd libs can define their own hooks (many of these including our )
// ie useLocation, useParams are defined by react-router

const CounterHooks = (props)=>{
    // allows to have state and update state in a functional component
    // useState
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    // allows to have lifecycle methods: 
    // componentDidMount, componentDidUpdate, componentWillUnMount
    // useEffect: is a function that takes a function:param1, and dependecy arr:param2
    // the function the useEffect takes can return a function that
    // will be called on unmount

    useEffect(()=>{
        console.log('CounterHooks useEffect with []')
        return ()=>{
            console.log('[]:, CounterHooks useEffect return cb called')
            console.log('---Unmounted---')
        }
    },[])

    // this will get called on mount and when setCount is called (count state changes)
    useEffect(()=>{
        console.log('CounterHooks useEffect with [count]')
        if(count ===10){
            setCount(0)
        }
        // this is getting called even though component did mount
        // return ()=>{
        //     console.log('[count]:, CounterHooks useEffect return cb called')
        // }
    },[count])

    useEffect(()=>{
        console.log('CounterHooks useEffect with [count, count2]')
    },[count,count2])
   
    console.log('CounterHooks "render"')
    return (
      <div>
          <h1>Counter (functional component)</h1>
          <p>count: {count}</p>
          <button onClick={()=>setCount(count + 1)}>add</button>
          <p>count2: {count2}</p>
          <button onClick={()=>setCount2(count2 + 1)}>add</button>
      </div>
    )
}

export default CounterHooks





    // useEffect: is a function that takes a function:param1, and dependecy arr:param2
    // the function the useEffect takes can return a function that
    // will be called on unmount
    
    //  part1:useEffect: is a function that  
    // useEffect()

    //  part2:useEffect: 
    // takes a cb function:param1, and dependecy arr:param2
    // useEffect(()=>{},[])

    // part 3 
    // this callback will called on mount, when state changes if that state is
    // in dependency array
      // useEffect(()=>{
          // call on mount and when count state changes
    //   },[count])

          // useEffect(()=>{
          // on called on mount
    //   },[])

    // useEffect(()=>{
          // on called on mount, and when any state changes (lead to stackoverflow)
          // getData()
    // })

    // getData = ()=>{
        // let res = axios
        // setData(red.data)
    // }

     // part 4 the cb function that useEffect takes as it first argument can return function 

    //  useEffect(()=>{
    //      // called when compents unmounts
    //      return()=>{

    //      }
    //  })


