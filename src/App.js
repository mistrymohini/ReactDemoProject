import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import PureComp from './Component/PureComp';

class App extends Component {
  render(){
    return (
      <div className="App">
       <PureComp/>
      </div>
    );
  }
}

export default App;
