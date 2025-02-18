import React, { Component } from 'react'

 class ClassClick extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello!'
      }
    }
    clickHandler()
    {
        this.setState({
            message:'Good Bye!'
        })
        //console.log("Button clicked from Class Component");
    }
  render() {
    return (
        <div>
            <div>{this.state.message}</div>
            {/* <button onClick={this.clickHandler.bind(this)}>Click Me</button> */}
            <button onClick={()=>this.clickHandler()}>Click Me</button>
      </div>
    )
  }
}

export default ClassClick