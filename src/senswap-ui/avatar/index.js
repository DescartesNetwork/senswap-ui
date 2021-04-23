import React from 'react';
import MuiAvatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';

import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';

import useStyles from './style';


function Avatar(props) {
  const classes = useStyles();
  const { size, variant, src, customSize, subtitle } = props;

  function CustomSize(customizedSize) {
    if (customizedSize) {
      return {
        width: `${customizedSize.width}${customizedSize.type ? customizedSize.type : 'px'}`,
        height: `${customizedSize.height}${customizedSize.type ? customizedSize.type : 'px'}`,
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
  size: PropTypes.string,
  variant: PropTypes.string,
  src: PropTypes.string,
  customSize: PropTypes.object,
}
Avatar.defaultProps = {
  size: 'small',
  variant: 'circular',
  src: null,
  customSize: {},
}
export default Avatar;