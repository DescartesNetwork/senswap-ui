import React from 'react';
import MuiAvatar from '@material-ui/core/Avatar';
import Proptype from 'prop-types';


import Grid from 'senswap-ui/grid';

import useStyles from './style';
import { Typography } from '@material-ui/core';

function Avatar(props) {
  const classes = useStyles();
  const { size, variant, src, customSize, subtitle } = props;

  function CustomSize(size) {
    if (size) {
      return {
        width: `${size.width}${size.type ? size.type : 'px'}`,
        height: `${size.height}${size.type ? size.type : 'px'}`,
      }
    }
  }

  return <Grid container direction="column" spacing={2}>
    <Grid item>
      <Grid container spacing={1} alignItems="center">
        <Grid className={classes.avatar} item>
          <MuiAvatar
            variant={variant}
            src={src}
            className={classes[size]}
            style={CustomSize(customSize)}
          />
        </Grid>
        {subtitle ?
          <Grid item>
            <Typography>{subtitle}</Typography>
          </Grid>
          : null}
      </Grid>
    </Grid>
  </Grid>
}

Avatar.propTypes = {
  size: Proptype.string,
  variant: Proptype.string,
  src: Proptype.string,
  customSize: Proptype.object,
}
Avatar.defaultProps = {
  size: 'small',
  variant: 'circular',
  src: null,
  customSize: {},
}
export default Avatar;