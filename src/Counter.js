import React from 'react'

class Counter extends React.Component{
    // 1.
    constructor(props){
        super(props)
        console.log('Counter constructor called')
        this.state = {count:0}
    }

    // 3.
    componentDidMount(){
        console.log('Counter componentDidMount called')
        console.log('-----MOUNTING PHASE DONE--------')
    }

    // after component is rerendered
    componentDidUpdate(prevProps, prevState){
        console.log('Counter componentDidUpdate called')
        console.log('prevState:',prevState)
        console.log('prevProps:',prevProps)
        if(prevState.count === 10){     
          this.setState({count: 0})
        }
        if(prevProps.someNumber === 10){     
            alert('yo someNumber is 10')
        }
    }
    increment = ()=>{
        let newCount = this.state.count +1
        console.log('Counter setState method called')
        this.setState({count: newCount})
    }

    componentWillUnmount(){
        console.log('Counter componentWillUnmount called')
        console.log('-----Counter NO LONGER ON DOM: UNMOUNTED--------')
    }
    // 2.
    render(){
        console.log('Counter render called')
        return(
            <div style={{border:'3px solid green'}}>
                <h1>Counter Component</h1>
                <p>someNumber prop: {this.props.someNumber}</p>
                <p>count state in counter: {this.state.count}</p>
                <button onClick={this.increment}>add</button>
            </div>
        )
    }
}

export default Counter