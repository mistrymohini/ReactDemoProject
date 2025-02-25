import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Mohini'
      }
      console.log('Lifecycle B Constructor');
    }
    static getDerivedStateFromProps(props,states)
    {
        console.log('Lifecycle B getDerivedStateFromProps');
        return null;
    }
    componentDidMount()
    {
        console.log('Lifecycle B componentDidMount');
    }
    render() {
        console.log('Lifecycle B render');
        return (
        <div>Lifecycle B</div>
        )
    }
}

export default LifecycleB