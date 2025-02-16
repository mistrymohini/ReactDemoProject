import React, { Component } from "react";

class Message extends Component{
    constructor()
    {
        super()
        this.state={
            message:"Hello World!"
        }
    }
    changeMessage()
    {
        this.setState({
            message:"Thank you for Submit."
        })
    }
    render(){
        return(
            <div>
                <h2> {this.state.message}</h2>
                <button onClick={() =>this.changeMessage()}>Submit</button>
            </div>
        )
    }
}

export default Message;