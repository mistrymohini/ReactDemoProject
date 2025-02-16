import React, { Component } from "react";

class Message extends Component{
    constructor()
    {
        super()
        this.state={
            message:"Hello World!"
        }
    }
    render(){
        return <h2> {this.state.message}</h2>
    }
}

export default Message;