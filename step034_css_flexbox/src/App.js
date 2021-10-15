import React from "react";

const App = () => {

  // container 1
  const container1 = {
    display: "flex",
    // alignItems: "flex-start", // for flex direction row, vertical alignment from start
    // alignItems: "flex-end",  // for flex direction row, vertical alignment from end
    alignItems: "center",  // for flex direction row, vertical alignment from center
    // alignItems: "strech", // default
    // flexDirection: "column",
    // flexDirection: "row", // default
  };

  const box1 = {
    background: "#eee",
    padding: "1em",
    border: "1px #ccc solid",
    flex: 2, // flex box size 2
    order: 2, // flex box order 2
  };

  const box2 = {
    background: "#eee",
    padding: "1em",
    border: "1px #ccc solid",
    flex: 1, // flex box size 1
    order: 1, // flex box order 1
  };

  const box3 = {
    background: "#eee",
    padding: "1em",
    border: "1px #ccc solid",
    flex: 1, // flex box size 1
    order: 3, // flex box order 3
  };

  // container 2
  const container2 = {
    display: "flex",
    // justifyContent: "flex-start", // default, content from start
    // justifyContent: "flex-end", // content from end
    // justifyContent: "center", // content from center
    // justifyContent: "space-between", // space between content, no space at start/end of content
    justifyContent: "space-around", // space around content, will put space at start/end of content
  };
 
  const box4 = {
    background: "#eee",
    padding: "1em",
    border: "1px #ccc solid",
    // width: "20%",
    flexBasis: "20%",
  };

  const box5 = {
    background: "#eee",
    padding: "1em",
    border: "1px #ccc solid",
    // width: "20%",
    flexBasis: "20%",
  };

  const box6 = {
    background: "#eee",
    padding: "1em",
    border: "1px #ccc solid",
    // width: "20%",
    flexBasis: "20%",
  };

  // container 3
  const container3 = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between", // space between content, no space at start/end of content

  };
 
  const box7 = {
    background: "#eee",
    padding: "1em",
    border: "1px #ccc solid",
    flexBasis: "10%",
  };

  const box8 = {
    background: "#eee",
    padding: "1em",
    border: "1px #ccc solid",
    flexBasis: "10%",
  };

  const box9 = {
    background: "#eee",
    padding: "1em",
    border: "1px #ccc solid",
    flexBasis: "10%",
  };
  
  const box10 = {
    background: "#eee",
    padding: "1em",
    border: "1px #ccc solid",
    flexBasis: "10%",
  };

  const box11 = {
    background: "#eee",
    padding: "1em",
    border: "1px #ccc solid",
    flexBasis: "10%",
  };

  const box12 = {
    background: "#eee",
    padding: "1em",
    border: "1px #ccc solid",
    flexBasis: "50%",
  };

  return (
    <div>
      <h1> CSS Flexbox</h1>
      
      <div style={container1}>
        <div style={box1}>
          <h2> Box 1 </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            tincidunt, magna a rhoncus euismod, tellus dolor varius purus, sit
            amet elementum dolor sapien sit amet nisl.
          </p>
        </div>
        <div style={box2}>
          <h2> Box 2 </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div style={box3}>
          <h2> Box 3 </h2>
          <p>
            Cras tincidunt, magna a rhoncus euismod, tellus dolor varius purus,
            sit amet elementum dolor sapien sit amet nisl. In condimentum vel
            erat eu placerat. Duis imperdiet lectus eget dui eleifend, eget
            euismod metus suscipit. Praesent vel orci eu dolor ullamcorper
            rutrum non quis nisi. Pellentesque finibus magna in odio tempus
            aliquam. Phasellus eget aliquet tellus. Etiam dignissim nunc quis
            lorem imperdiet tincidunt. Vestibulum dignissim elit a varius
            semper.
          </p>
        </div>
      </div>

      <div style={container2}>
        <div style={box4}>
          <h2> Box 4 </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            tincidunt, magna a rhoncus euismod, tellus dolor varius purus, sit
            amet elementum dolor sapien sit amet nisl.
          </p>
        </div>
        <div style={box5}>
          <h2> Box 5 </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div style={box6}>
          <h2> Box 6 </h2>
          <p>
            Cras tincidunt, magna a rhoncus euismod, tellus dolor varius purus,
            sit amet elementum dolor sapien sit amet nisl. In condimentum vel
            erat eu placerat. Duis imperdiet lectus eget dui eleifend, eget
            euismod metus suscipit. Praesent vel orci eu dolor ullamcorper
            rutrum non quis nisi. Pellentesque finibus magna in odio tempus
            aliquam. Phasellus eget aliquet tellus. Etiam dignissim nunc quis
            lorem imperdiet tincidunt. Vestibulum dignissim elit a varius
            semper.
          </p>
        </div>
      </div>

      <div style={container3}>
        <div style={box7}>
          <h2> Box 7 </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            tincidunt, magna a rhoncus euismod, tellus dolor varius purus, sit
            amet elementum dolor sapien sit amet nisl.
          </p>
        </div>
        <div style={box8}>
          <h2> Box 8</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div style={box9}>
          <h2> Box 9 </h2>
          <p>
            Cras tincidunt, magna a rhoncus euismod, tellus dolor varius purus,
            sit amet elementum dolor sapien sit amet nisl. In condimentum vel
            erat eu placerat. Duis imperdiet lectus eget dui eleifend, eget
            euismod metus suscipit. Praesent vel orci eu dolor ullamcorper
            rutrum non quis nisi. Pellentesque finibus magna in odio tempus
            aliquam. Phasellus eget aliquet tellus. Etiam dignissim nunc quis
            lorem imperdiet tincidunt. Vestibulum dignissim elit a varius
            semper.
          </p>
        </div>
        <div style={box10}>
          <h2> Box 10</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div style={box11}>
          <h2> Box 11</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div style={box12}>
          <h2> Box 12</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
