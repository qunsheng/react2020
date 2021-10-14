import React from "react";

const App = () => {
  const wrapper = {
    display: "grid",
    // gridTemplateColumns: "1fr 2fr 1fr", /* patern: 1fr 2fr 1fr */
    gridTemplateColumns: "repeat(2, 1fr 2fr)", /* 1fr, 2fr for 2 columns*/
    gridGap: "20px",
    // gridAutoRows: '100px' // every row has 100px high, nothing to do with content
    gridAutoRows: 'minmax(100px, auto)' // min high 100px, beyond that will be auto
  };

  const item = {
    background: "#eee",
    padding: "1em",
  };

  const nested = {
    background: "#eee",
    padding: "1em",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "10px",
    gridAutoRows: '70px' // every row has 70px high, nothing to do with content
  };

  const  nestedItem = {
    border: "#333 1px solid",
    padding: "1em",
  };

  return (
    <div>
      <h1> CSS Grids</h1>
      <div style={wrapper}>
        <div style={item}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </div>

        <div style={item}>
          It is a long established.
        </div>
        
        <div style={item}>
          It is a long established.
        </div>
        
        <div style={item}>
          It is a long established.
        </div>
        
        <div style={item}>
          It is a long established.
        </div>
        
        <div style={item}>
          It is a long established.
        </div>
        
        <div style={item}>
          It is a long established.
        </div>
          
        <div style={nested}>
          <div style={nestedItem}>
          Lorem Ipsu
          </div>
          <div style={nestedItem}>
          Lorem Ipsu
          </div>
          <div style={nestedItem}>
          Lorem Ipsu
          </div>
          <div style={nestedItem}>
          Lorem Ipsu
          </div>
          <div style={nestedItem}>
          Lorem Ipsu
          </div>
          <div style={nestedItem}>
          Lorem Ipsu
          </div>
        </div>
        
        <div style={item}>
          It is a long established.
        </div>
      
        <div style={item}>
          It is a long established.
        </div>
        
        <div style={item}>
          It is a long established.
        </div>
        
        <div style={item}>
          It is a long established.
        </div>
      </div>
    </div>
  );
};

export default App;
