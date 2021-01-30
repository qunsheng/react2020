import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import {ThemeContext, themes} from './theme-context';
import ThemedButtonComponent1 from './themed-button-component-1';
import ThemedButtonComponent2 from './themed-button-component-2';
import ThemedButtonConsumer from './themed-button-consumer';
import ThemedButtonHook from './themed-button-hook';

// An intermediate component that uses the ThemedButton
function Toolbar(props) {
  return (
    <ThemedButtonComponent1 onClick={props.changeTheme}>
      Click to Change Theme 
    </ThemedButtonComponent1>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }

  render() {
    return <div><Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            React App example
          </Typography>
        </Box>

        <Box my={4}>
          <Toolbar changeTheme={this.toggleTheme} />
        </Box>
        {/* Provider component accepts a value prop that allows consuming components to subscribe to context changes.*/}
        <ThemeContext.Provider value={this.state.theme}>
          <Box my={4}>
            <ThemedButtonComponent1 > Component Button 1 </ThemedButtonComponent1>
          </Box>
          <Box my={4}>
            <ThemedButtonComponent2 > Component Button 2 </ThemedButtonComponent2>
          </Box>
          <Box my={4}>
            <ThemedButtonConsumer > Consumer Button  </ThemedButtonConsumer>
          </Box>
          <Box my={4}>
            <ThemedButtonHook > Hook Button </ThemedButtonHook>
          </Box>
        </ThemeContext.Provider>
                  
      
      </Container>
    </div>
  }
}

export default App;


