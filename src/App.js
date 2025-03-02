import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FocusInput from './Component/FocusInput';

class App extends Component {
  render(){
    return (
      <div className="App">
       <FocusInput/>
      </div>
    );
  }
}

export default App;
