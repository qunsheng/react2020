import React from "react";
import {ThemeContext} from './theme-context';

import Button from '@material-ui/core/Button';

// Component set contextType approach to get context value
class ThemedButtonComponent1 extends React.Component {
    render() {
      let props = this.props;
      // get theme from this.context
      let theme = this.context;
      return (
        <Button {...props} variant="contained"  color={theme.color}></Button>
      );
    }
}
/*
The contextType property on a class can be assigned a Context object created by React.createContext().
This lets you consume the nearest current value of that Context type using this.context. 
*/
ThemedButtonComponent1.contextType = ThemeContext;

export default ThemedButtonComponent1;