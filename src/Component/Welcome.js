import React, { Component } from "react";

class Welcome extends Component{
    render(){
        const{name}=this.props;
        return <h2> {name} in Class Component</h2>
    }
}

export default Welcome;