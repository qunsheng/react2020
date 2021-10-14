import React from 'react';

const Grid = (props) => {
  const wrapper = {
    display: "grid",
    gridTemplateColumns: "10rem 10rem 10rem", /* This adjusts the pattern of the columns */
    gridAutoFlow: "row",
    columnGap: "10px", /* This adjusts the space between the columns*/
    rowGap: "10px" /* This adjusts the space between the rows */
    /* grid-template-rows: 60px;  *//* This adjusts the width of the rows */
  };
  
  const cells = props.arrOfObj.map(obj => 
    <div style={{ backgroundColor: `${'#'+Math.random().toString(16).substr(-6)}`}} >
      {obj}
    </div>
  );

  return (
    <div style={wrapper}>
      {cells}
    </div>
  )
}

const App = () => {
  const arrOfObj = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div >
      <Grid arrOfObj={arrOfObj}/>
    </div>
  );
};

export default App;