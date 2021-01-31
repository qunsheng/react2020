import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import ProTipsStyle from './ProTipStyle';
import LightBulbIcon from './LightBulbIcon';

const useStyles = makeStyles( ProTipsStyle);

export default function ProTip() {
  const classes = useStyles();
  return (
    <Typography className={classes.root} color="textSecondary">
      <LightBulbIcon className={classes.lightBulb} />
      Styled by JSS for functional component.
    </Typography>
  );
}
