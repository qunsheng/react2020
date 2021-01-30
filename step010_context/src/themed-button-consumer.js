import React from "react";
import {ThemeContext} from './theme-context';

import Button from '@material-ui/core/Button';

// Component use consumer to get context value
class ThemedButtonConsumer extends React.Component {  
    render() {
      let props = this.props;
      return (
        // use context consumer to get context value
        <ThemeContext.Consumer>
            {theme => <Button {...props} variant="contained"  color={theme.color}></Button>}
        </ThemeContext.Consumer>
      );
    }
}

export default ThemedButtonConsumer;