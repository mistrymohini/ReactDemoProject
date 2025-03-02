import React, { Component } from 'react'
import RegularComp from './RegularComp'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Mohini'
      }
    }
componentDidMount()
{
    setInterval(() => {
        this.setState({
            name:'Mohini'
        })
    },2000)
}
  render() {
    return (
      <div>
        Parent Component
      <RegularComp name={this.state.name}/>
      {/* <ParentComp name={this.state.name}/> */}
      </div>
    )
  }
}

export default ParentComp