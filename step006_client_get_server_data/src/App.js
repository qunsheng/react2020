import React from "react";
import HelloApp1 from './HelloApp1';
import HelloApp2 from './HelloApp2';

class App extends React.Component {
  
  constructor(props) {
      super(props);
      this.state = {
          helloDefault: true
      }
  }

  toggleDefault = () => {
      // if setState parameter is function, the prevSate obj will passed in
      this.setState( prevState => {
          // return new state
          return { helloDefault: !prevState.helloDefault}
      })
  }

  render() {
    const { helloDefault } = this.state;
    return (
      <div>
        <div>
          <button onClick = {this.toggleDefault}> Swith Hello App</button>
        </div>
        {helloDefault? <div>
            <p> From Hello App 1</p>
            <HelloApp1 />
          </div>: <div>
            <p> From Hello App 2</p>
            <HelloApp2 />
          </div>
        }
      </div>
    );
  }
}

export default App;
