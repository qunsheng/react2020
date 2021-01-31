import React, {Component} from 'react';
import { withStyles } from "@material-ui/core/styles";

import Typography from '@material-ui/core/Typography';

import ProTipsStyle from './ProTipStyle';
import LightBulbIcon from './LightBulbIcon';


class ProTip2 extends Component {

  render() {
    const { classes } = this.props;
    return (
      <Typography className={classes.root} color="textSecondary">
        <LightBulbIcon className={classes.lightBulb} />
        Styled by JSS for class component.
      </Typography>
    );
  }
}

export default withStyles(ProTipsStyle )(ProTip2 );