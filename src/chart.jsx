import React from 'react';
import FadeIn from 'react-fade-in';
import SunburstDiagram from './SunburstDiagram'

export default ({toggleWords}) => <FadeIn><SunburstDiagram height={500} width={500} toggleWords={toggleWords}/></FadeIn>
