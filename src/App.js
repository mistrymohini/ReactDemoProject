import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Component/Greet';
import Welcome from './Component/Welcome';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Greet name="Mohini">
          <p>This is first Candidate</p>
        </Greet>
        <Greet name="Dhyana"></Greet>
        <Greet name="Alpesh"></Greet>
        {/* <Welcome></Welcome> */}
      </div>
    );
  }
}

export default App;
