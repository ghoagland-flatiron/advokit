import React, { Component } from 'react';
import logo from './logo.svg';
import SunburstDiagram from './SunburstDiagram'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SunburstDiagram height={500} width={500}/>
        </header>
      </div>
    );
  }
}

export default App;
