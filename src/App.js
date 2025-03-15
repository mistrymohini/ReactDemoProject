import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ClickCounter from './Component/ClickCounter';
import HoverCounter from './Component/HoverCounter';
import RenderCounter from './Component/RenderCounter';
import ComponentC from './Component/ComponentC';
import { UserProvider } from './Component/UserContext';

class App extends Component {
  render(){
    return (
      <div className="App">
        {/* <UserProvider value='Mohini'> */}
          <ComponentC/>
        {/* </UserProvider> */}
      </div>
    );
  }
}

export default App;
