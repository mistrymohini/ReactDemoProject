import React from 'react'
import ParentComponent, {Component} from 'react'

function ChildComponent(props) {
  return (
    <div>
        <button onClick={()=>props.greetHandler('child')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent