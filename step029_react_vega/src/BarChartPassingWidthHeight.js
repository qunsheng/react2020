import React from "react";

import {Vega} from 'react-vega';

const DATA = {
  myData: [
    { a: 'A', b: 20 },
    { a: 'B', b: 34 },
    { a: 'C', b: 55 },
    { a: 'D', b: 19 },
    { a: 'E', b: 40 },
    { a: 'F', b: 34 },
    { a: 'G', b: 91 },
    { a: 'H', b: 78 },
    { a: 'I', b: 25 },
  ],
};

const SPEC = {
  description: 'A simple bar chart with embedded data.',
  layer: [
    {
      data: { name: 'myData' },
      encoding: {
        x: { field: 'a', type: 'ordinal' },
        y: { field: 'b', type: 'quantitative' },
      },
      mark: 'bar',
    },
  ],
};

export default class App extends React.Component {
  render() {
    return <Vega spec={SPEC} data={DATA} width={800} height={600}/>
  }
}
