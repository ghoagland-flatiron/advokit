import React, { Component } from 'react'
import { Sunburst, LabelSeries } from 'react-vis';
import data from './domains'


const LABEL_STYLE = {
  fontSize: '15px',
  textAnchor: 'middle'
};

class SunburstDiagram extends Component {

  state = {
    labelText: ""
  }

  mouseOverHandler = (node) => {
    this.setState({ labelText: node.title })
  }

  render() {
    return (
      <Sunburst
        hideRootNode
        height={this.props.height}
        width={this.props.width}
        data={data}
        getSize={d => d.children.length || 500}
        padAngle={() => 0.01}
        onValueMouseOver={this.mouseOverHandler}
      >
        <LabelSeries
          data={[{x: 0, y: 0, label: this.state.labelText, style: LABEL_STYLE}]}
        />
      </Sunburst>
    )
  }

}

export default SunburstDiagram
