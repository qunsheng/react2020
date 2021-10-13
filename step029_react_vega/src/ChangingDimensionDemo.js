import React from "react";

import {Vega} from 'react-vega';

const values = [];

for (let i = 0; i< 100 ;i++ ) {
  values.push({
    a: `X${i}`,
    b: Math.round(Math.random() * 1000)
  })
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 100,
      height: 100,
      padding: 20,
      grow: true,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(({width, height, padding, grow}) => ({
        width: width + (grow ? 1 : -1),
        height: height + (grow ? 1 : -1),
        grow: grow && width < 400 || !grow && width === 100
      }));
    }, 10);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { width, height, padding } = this.state;

    const SPEC = {
      $schema: "https://vega.github.io/schema/vega-lite/v4.json",
      width,
      height,
      padding,
      data: {
        values,
        name: "source"
      },
      selection: {
        a: { type: "single" }
      },
      mark: "bar",
      encoding: {
        x: { field: "a", type: "ordinal" },
        y: { field: "b", type: "quantitative" },
        tooltip: { field: "b", type: "quantitative" },
        color: {
          condition: { selection: "a", value: "steelblue" },
          value: "grey"
        }
      }
    } ;

    return <Vega spec={SPEC} />;
  }
}
