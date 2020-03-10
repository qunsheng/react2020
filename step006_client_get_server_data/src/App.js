import React from "react";
import AppData from "./AppData";

class App extends React.Component {
  constructor(props) {
    super();
    this.appDataObj = new AppData();
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
    this.appDataObj
      .dataQuery("hello.json")
      .then(data => this.setState({ data }));
  }
}

export default App;
