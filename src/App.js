import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ClickCounter from './Component/ClickCounter';
import HoverCounter from './Component/HoverCounter';

class App extends Component {
  render(){
    return (
      <div className="App">
        <ClickCounter name='Mohini'/>
        <HoverCounter/>
      </div>
    );
  }
}

export default App;
