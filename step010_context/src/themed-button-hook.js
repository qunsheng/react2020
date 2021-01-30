import React, {useContext} from "react";
import {ThemeContext} from './theme-context';

import Button from '@material-ui/core/Button';

// // Component set static contextType approach to get context value
// class ThemedButtonHook extends React.Component {  // Assign a contextType to read the current theme context.
//     // React will find the closest theme Provider above and use its value.
//     static contextType = ThemeContext;
//     render() {
//       let props = this.props;
//       // get theme from this.context
//       let theme = this.context;
//       return (
//         <Button {...props} variant="contained"  color={theme.color}></Button>
//       );
//     }
// }
function ThemedButtonHook (props) {
    const theme = useContext(ThemeContext);
    return (
        <Button {...props} variant="contained"  color={theme.color}></Button>
    );
}

export default ThemedButtonHook;