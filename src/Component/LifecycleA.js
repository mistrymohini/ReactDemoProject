import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Mohini'
      }
      console.log('LifeCycle A Constructor');
    }
    static getDerivedStateFromProps(props,states)
    {
        console.log('LifeCycle A getDerivedStateFromProps');
        return null;
    }
    componentDidMount()
    {
        console.log('LifeCycle A componentDidMount');
    }
    render() {
        console.log('LifeCycle A render');
        return (
        <div>
        Lifecycle A
        <LifecycleB/>
        </div>
        )
    }
}

export default LifecycleA