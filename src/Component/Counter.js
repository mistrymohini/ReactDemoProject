import React, { Component } from "react";

class Message extends Component{
    constructor()
    {
        super()
        this.state={
            count:0
        }
    }
    increment()
    {
        this.setState({
           count:this.state.count+1
        })
    }
    render(){
        return(
            <div>
                <h2> Count: {this.state.count}</h2>
                <button onClick={() =>this.increment()}>Increment</button>
            </div>
        )
    }
}

export default Message;