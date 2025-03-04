import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ErrorShow from './Component/ErrorShow';
import ErrorBoundry from './Component/ErrorBoundry';

class App extends Component {
  render(){
    return (
      <div className="App">
        <ErrorBoundry>
        <ErrorShow heroName="Batman"/>
        </ErrorBoundry>
        <ErrorBoundry>
        <ErrorShow heroName="Spiderman"/>
        </ErrorBoundry>
        <ErrorBoundry>
        <ErrorShow heroName="Joker"/>
        </ErrorBoundry>
      </div>
    );
  }
}

export default App;
