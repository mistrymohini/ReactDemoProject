import React, { Component } from 'react'

 class ClassClick extends Component {
    clickHandler()
    {
        console.log("Button clicked from Class Component");
    }
  render() {
    return (
      <button onClick={this.clickHandler}>Click Me</button>
    )
  }
}

export default ClassClick