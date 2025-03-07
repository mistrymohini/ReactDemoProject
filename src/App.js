import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ClickCounter from './Component/ClickCounter';
import HoverCounter from './Component/HoverCounter';
import RenderCounter from './Component/RenderCounter';

class App extends Component {
  render(){
    return (
      <div className="App">
        <RenderCounter render={(count,incrementCount)=>(
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
        />

        <RenderCounter render={(count,incrementCount)=>(
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
        />
        {/* <ClickCounter name='Mohini'/>
        <HoverCounter/> */}
      </div>
    );
  }
}

export default App;
