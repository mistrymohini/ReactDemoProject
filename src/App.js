import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Component/Greet';
import Welcome from './Component/Welcome';
import Message from './Component/Message';
import Counter from './Component/Counter';
import FunctionClick from './Component/FunctionClick';
import ClassClick from './Component/ClassClick';
import ParentComponent from './Component/ParentComponent';
import ConditionalComponent from './Component/ConditionalComponent';

class App extends Component {
  render(){
    return (
      <div className="App">
        <ConditionalComponent/>
        {/* <ParentComponent/> */}
        {/* <FunctionClick></FunctionClick> */}
        {/* <ClassClick></ClassClick> */}
        {/* <Greet name="Mohini">
          <p>This is first Candidate</p>
        </Greet> 
        <Greet name="Dhyana"></Greet>
        <Greet name="Alpesh"></Greet>
        <Welcome name="Mohini"></Welcome> 
        <Welcome name="Dhyana"></Welcome> 
        <Message></Message>
        <Counter></Counter> */}
      </div>
    );
  }
}

export default App;
