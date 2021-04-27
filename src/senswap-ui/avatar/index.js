import React, { forwardRef } from 'react';
import MuiAvatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';

import Grid from 'senswap-ui/grid';

import useStyles from './style';


const Avatar = forwardRef((props, ref) => {
  const classes = useStyles();
  const { size, variant, src, className, ...others } = props;

  return <Grid container spacing={1} alignItems="center">
    <Grid className={classes.avatar} item>
      <MuiAvatar
        variant={variant}
        src={src}
        className={`${classes[size]} ${className}`}
        {...others}
        ref={ref}
      />
    </Grid>
  </Grid>
})

Avatar.defaultProps = {
  size: 'small',
  variant: 'circular',
  src: null,
}

Avatar.propTypes = {
  size: PropTypes.string,
  variant: PropTypes.string,
  src: PropTypes.string,
}

export default Avatar;