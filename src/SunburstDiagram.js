import React, { Component } from 'react'
import { Sunburst } from 'react-vis';
import data from './domains'


const LABEL_STYLE = {
  fontSize: '10px',
  // textAnchor: 'middle'

};

class SunburstDiagram extends Component {

  state = {
    labelText: ""
  }

  render() {
    const newChildren = data.children.map(point => ({
      ...point,
      labelStyle: LABEL_STYLE,
      children: point.children.map(subpt => ({...subpt, labelStyle: LABEL_STYLE}))
    }))

    const newData = {...data, children: newChildren}
    return (
      <Sunburst
        hideRootNode
        height={this.props.height}
        width={this.props.width}
        data={newData}

        getLabel={d => d.title}
        getSize={d => d.children.length || 500}
        padAngle={() => 0.01}
      >


      </Sunburst>
    )
  }
}

export default SunburstDiagram
