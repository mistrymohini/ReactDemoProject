import React, { Component } from 'react'

class ConditionalComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:false
      }
    }
  render() {
    if(this.state.isLoggedIn)
    {
        return <div>Welcome Mohini</div>
    }
    else{
        return <div>Welcome Guest</div>
    }
  }
}

export default ConditionalComponent