import React from 'react'

function FunctionClick() {

    function clickHandler()
    {
        console.log("Button clicked from Functional Component");
    }

  return (
    <button onClick={clickHandler}>Click FC</button>
  )
}

export default FunctionClick