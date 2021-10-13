import React from "react";

import {Vega} from 'react-vega';

import data1 from './vega/data1.json';
import spec1 from './vega/spec1';
import spec2 from './vega/spec2';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data1,
      info: '',
      // spec: spec1,
      spec: spec2,
    };

  }

  render() {
    return <Vega data={this.state.data} spec={this.state.spec}  />
  }
}
