import React from 'react'

function FunctionClick() {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      message:'Hello!'
    //   }
    // }

    function clickHandler()
    {
        // this.setState({
        //     message:'Good Bye!'
        // })
        console.log("Button clicked from Functional Component");
    }

  return (
    <div>
    <div>{this.state.message}</div>
    <button onClick={clickHandler}>Click FC</button>
    </div>
  )
}

export default FunctionClick