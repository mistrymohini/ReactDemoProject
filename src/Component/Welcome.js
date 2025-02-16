import React, { Component } from "react";

class Welcome extends Component{
    render(){
        return <h2> {this.props.name} in Class Component</h2>
    }
}

export default Welcome;