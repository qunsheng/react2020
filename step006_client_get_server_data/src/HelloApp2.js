import React from "react";
import HelloData from "./HelloData";

class HelloApp2 extends React.Component {
  constructor(props) {
    super();
    this.helloDataObj = new HelloData();
    this.state = { data: { name: "unknown", action: "unknown" } };
  }
  render() {
    return (
      <div>
        <p>name: {this.state.data.name || ""} </p>
        <p>action: {this.state.data.action || ""} </p>
      </div>
    );
  }
  componentDidMount() {
    this.helloDataObj.getHelloData().then (data => {
      this.setState({ data });
    });
  }
}

export default HelloApp2;
