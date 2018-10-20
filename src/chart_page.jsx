import React from 'react';
import Chart from './chart.jsx';
import FadeIn from 'react-fade-in';


export default class ChartPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showWords: false
    }
    this.toggleWords = this.toggleWords.bind(this);
  }

  toggleWords() {
    this.setState({ showWords: !this.state.showWords })
  }

  significantWords() {
    return(
      <FadeIn>
        <ul id='chart-significant-words'>
          { this.props.words.map( word => <li>{word}</li>) }
        </ul>
      </FadeIn>
    )
  }

  render() {
    const words = this.state.showWords ? this.significantWords() : ""
    return(
      <div id='chart-page'>
        <Chart id='chart' toggleWords={this.toggleWords} />
        {words}
      </div>
    )
  }
}
