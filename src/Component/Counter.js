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
        //// this will not work when incrementtofive calls it five time
        //// as it runs all on one go
        // this.setState({
        //    count:this.state.count+1
        // })

        //// save result to previous state and use them to increment 1
        this.setState(prevState=> ({
               count: prevState.count+1
            }))
    }
    incrementtofive()
    {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    render(){
        return(
            <div>
                <h2> Count: {this.state.count}</h2>
                <button onClick={() =>this.incrementtofive()}>Increment</button>
            </div>
        )
    }
}

export default Message;