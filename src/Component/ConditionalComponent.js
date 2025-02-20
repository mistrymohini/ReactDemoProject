import React, { Component } from 'react'

class ConditionalComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }

   
   render() {
    let message
    if(this.state.isLoggedIn)
        message=<div>Welcome Mohini</div>
    else
        message=<div>Welcome Guest</div>

    return message

//     if(this.state.isLoggedIn)
//     {
//         return <div>Welcome Mohini</div>
//     }
//     else{
//         return <div>Welcome Guest</div>
//     }
   }
}

export default ConditionalComponent