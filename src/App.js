import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './story_input.css';
import Input from './input_story.jsx';
import ChartPage from './chart_page.jsx';

const words = ['sad', 'journey', 'God', 'pray', 'forgiveness', 'individual'];

const components = {
  story: Input,
  chart: ChartPage
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      comp: 'story'
    }
  }

  switchView(component) {
    return(
      () => {
        this.setState({ comp: component })
      }
    )
  }

  render() {

    const Comp = components[this.state.comp]
    return (
      <div className="App">
        <Comp words={words} switchView={this.switchView.bind(this)}/>
      </div>
    );
  }
}

export default App;
