import React, { Component } from 'react'
//import WithCounter from './WithCounter'

class HoverCounter extends Component {
    render() {
    const {count,incrementCount}=this.props

        return (
            <h1 onMouseOver={incrementCount}>Hover {count} times</h1>
        )
    }
}

//export default WithCounter(HoverCounter,10)
export default HoverCounter