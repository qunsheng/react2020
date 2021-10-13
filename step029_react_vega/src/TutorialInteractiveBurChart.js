import React from "react";
import {Vega} from 'react-vega';

// https://observablehq.com/@vega/how-vega-works

function App() {
  const spec = {
      "width": 200,
      "height": 100,
      "data": [
          {
              "name": "table",
              "values": [
                  {
                      "key": "A",
                      "value": 4
                  },
                  {
                      "key": "B",
                      "value": 10
                  },
                  {
                      "key": "C",
                      "value": 7
                  }
              ]
          }
      ],
      "scales": [
          {
              "name": "xscale",
              "type": "band",
              "domain": {
                  "data": "table",
                  "field": "key"
              },
              "padding": {
                  "signal": "scalePadding"
              },
              "range": "width"
          },
          {
              "name": "yscale",
              "type": "linear",
              "domain": {
                  "data": "table",
                  "field": "value"
              },
              "range": "height"
          }
      ],
      "marks": [
          {
              "type": "rect",
              "from": {
                  "data": "table"
              },
              "encode": {
                  "update": {
                      "x": {
                          "scale": "xscale",
                          "field": "key"
                      },
                      "y": {
                          "scale": "yscale",
                          "field": "value"
                      },
                      "y2": {
                          "scale": "yscale",
                          "value": 0
                      },
                      "width": {
                          "scale": "xscale",
                          "band": 1
                      },
                      "fill": {
                          "value": "steelblue"
                      }
                  }
              }
          }
      ],
      "signals": [
          {
              "name": "scalePadding",
              "value": 0.1,
              "bind": {
                  "input": "range",
                  "min": 0,
                  "max": 0.99,
                  "step": 0.01
              }
          }
      ]
  
  };

  return (
    <Vega spec={spec} />
  );
}
export default App;