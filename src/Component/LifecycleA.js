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
    shouldComponentUpdate()
    {
        console.log('LifeCycle A shouldComponentUpdate');
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log('LifeCycle A getSnapshotBeforeUpdate');   
        return null;
    }
    componentDidUpdate()
    {
        console.log('LifeCycle A componentDidUpdate');   
    }
    changeState=()=>{
        this.setState({
            name:'Dhyana'
        })
    }
    render() {
        console.log('LifeCycle A render');
        return (
        <div>
        Lifecycle A
        <button onClick={this.changeState}>Change State </button>
        <LifecycleB/>
        </div>
        )
    }
}

export default LifecycleA