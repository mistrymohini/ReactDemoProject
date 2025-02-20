import React, { Component } from 'react'

class ConditionalComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:false
      }
    }

   
   render() {
    
    return this.state.isLoggedIn?<div>Welcome Mohini</div>:<div>Welcome Guest</div>

    // let message
    // if(this.state.isLoggedIn)
    //     message=<div>Welcome Mohini</div>
    // else
    //     message=<div>Welcome Guest</div>

    // return message

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