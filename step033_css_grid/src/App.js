import React from "react";

const App = () => {
  const wrapper = {
    display: "grid",
    gridTemplateColumns: "1fr 2fr 1fr", /* patern: 1fr 2fr 1fr */
    gridGap: "10px",
    // gridAutoRows: '100px' // every row has 100px high, nothing to do with content
    gridAutoRows: 'minmax(100px, auto)', // min high 100px, beyond that will be auto
    // justifyItems: "start", // put elment to start of column
    // justifyItems: "end", // put element to end of column
    justifyItems: "stretch", // stretch element
    // justifyItems: "center", // put element to center of column
    // alignItems: "start", // put elemeent to start of row
    // alignItems: "end", // put element to end of row
    alignItems: "stretch",
    // alignItems: "center",
  };

  const box1 = {
    background: "#eee",
    padding: "1em",
    gridColumn: "1/3", // column span from 1 to 3
    gridRow: "1/3" // row span from 1 to 3
    // alignSelf: "start"
  };

  const box2 = {
    background: "#eee",
    padding: "1em",
    gridColumn: "3", // column span from 3
    gridRow: "1/3" // row span from 1 to 3
    // alignSelf: "end"
  };
  
  const box3 = {
    background: "#eee",
    padding: "1em",
    gridColumn: "2/4",// column span from 2 to 4
    gridRow: "3" // row span from 3
    // alignSelf: "end",
  };
  
  const box4 = {
    background: "yellow",
    padding: "1em",
    gridColumn: "1", // column span from 1
    gridRow: "2/4", // row span from 2 to 4
    border: "1px solid #333"
    // alignSelf: "end"
  };

  return (
    <div>
      <h1> CSS Grids</h1>
      <div style={wrapper}>
        <div style={box1 }>
          box 1
        </div> 
        <div style={box2 }>
          box 2
        </div>
        <div style={box3 }>
          box 3
        </div>
        <div style={box4 }>
          box 4
        </div>
      </div>
    </div>
  );
};

export default App;
