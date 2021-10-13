import React from "react";
import {Vega} from 'react-vega';

// https://github.com/vega/vega-lite/issues/6641

function App() {
  const spec = {
      "$schema": "https://vega.github.io/schema/vega/v5.json",
      "description": "A simple bar chart with embedded data.",
      "background": "white",
      "padding": 5,
      "height": 200,
      "style": "cell",
      "data": [
        {
          "name": "source_0",
          "values": [
            {"a": "A", "b": 28},
            {"a": "B", "b": 55},
            {"a": "C", "b": 43},
            {"a": "D", "b": 91},
            {"a": "E", "b": 81},
            {"a": "F", "b": 53},
            {"a": "G", "b": 19},
            {"a": "H", "b": 87},
            {"a": "I", "b": 52}
          ]
        },
        {
          "name": "data_0",
          "source": "source_0",
          "transform": [
            {
              "type": "stack",
              "groupby": ["a"],
              "field": "b",
              "sort": {"field": ["b"], "order": ["descending"]},
              "as": ["b_start", "b_end"],
              "offset": "zero"
            },
            {
              "type": "filter",
              "expr": "isValid(datum[\"b\"]) && isFinite(+datum[\"b\"])"
            }
          ]
        }
      ],
      "signals": [
        {"name": "x_step", "value": 20},
        {
          "name": "width",
          "update": "bandspace(domain('x').length, 0.1, 0.05) * x_step"
        }
      ],
      "marks": [
        {
          "name": "marks",
          "type": "rect",
          "style": ["bar"],
          "from": {"data": "data_0"},
          "encode": {
            "update": {
              "fill": {"scale": "color", "field": "b"},
              "ariaRoleDescription": {"value": "bar"},
              "description": {
                "signal": "\"a\" + \": \" + (isValid(datum[\"a\"]) ? datum[\"a\"] : \"\"+datum[\"a\"]) + \"; \" + \"b\" + \": \" + (isValid(datum[\"b\"]) ? datum[\"b\"] : \"\"+datum[\"b\"])"
              },
              "x": {"scale": "x", "field": "a"},
              "width": {"scale": "x", "band": 1},
              "y": {"scale": "y", "field": "b_end"},
              "y2": {"scale": "y", "field": "b_start"}
            }
          }
        }
      ],
      "scales": [
        {
          "name": "x",
          "type": "band",
          "domain": {"data": "data_0", "field": "a", "sort": true},
          "range": {"step": {"signal": "x_step"}},
          "paddingInner": 0.1,
          "paddingOuter": 0.05
        },
        {
          "name": "y",
          "type": "linear",
          "domain": {"data": "data_0", "fields": ["b_start", "b_end"]},
          "range": [{"signal": "height"}, 0],
          "nice": true,
          "zero": true
        },
        {
          "name": "color",
          "type": "ordinal",
          "domain": {"data": "data_0", "field": "b", "sort": true},
          "range": "category"
        }
      ],
      "axes": [
        {
          "scale": "y",
          "orient": "left",
          "gridScale": "x",
          "grid": true,
          "tickCount": {"signal": "ceil(height/40)"},
          "domain": false,
          "labels": false,
          "aria": false,
          "maxExtent": 0,
          "minExtent": 0,
          "ticks": false,
          "zindex": 0
        },
        {
          "scale": "x",
          "orient": "bottom",
          "grid": false,
          "title": "a",
          "labelAngle": 0,
          "labelBaseline": "top",
          "labelOverlap": true,
          "zindex": 0
        },
        {
          "scale": "y",
          "orient": "left",
          "grid": false,
          "title": "b",
          "labelOverlap": true,
          "tickCount": {"signal": "ceil(height/40)"},
          "zindex": 0
        }
      ],
      "legends": [
        {
          "fill": "color",
          "symbolType": "circle",
          "padding": 5,
          "title": "b",
          "encode": {
            "legend": {
              "update": {"stroke": {"value": "#ccc"}, "strokeWidth": {"value": 2.5} }
            }
          }
        }
      ]
  };

  return (
    <Vega spec={spec} />
  );
}
export default App;
