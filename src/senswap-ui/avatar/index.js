import React, { forwardRef } from 'react';
import MuiAvatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';

import Grid from 'senswap-ui/grid';

import useStyles from './style';


const Avatar = forwardRef((props, ref) => {
  const classes = useStyles();
  const { sizes, variant, src, classes: userClasses, ...others } = props;
  let avatarSize = {};
  avatarSize[variant] = classes[sizes];
  const combinedClasses = {...avatarSize, ...userClasses};
  return <Grid container spacing={1} alignItems="center">
    <Grid item>
      <MuiAvatar
        variant={variant}
        src={src}
        classes={combinedClasses}
        {...others}
        ref={ref}
      />
    </Grid>
  </Grid>
})

Avatar.defaultProps = {
  sizes: 'xsmall',
  variant: 'circular',
  src: null,
  classes: {},
}

Avatar.propTypes = {
  sizes: PropTypes.string,
  variant: PropTypes.string,
  src: PropTypes.string,
  classes: PropTypes.object,
}

export default Avatar;