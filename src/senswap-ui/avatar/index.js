import React, { forwardRef } from 'react';
import MuiAvatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';

import Grid from 'senswap-ui/grid';

import useStyles from './style';


const Avatar = forwardRef((props, ref) => {
  const classes = useStyles();
  const { sizes, variant, src, classes: userClasses,className: userClassName,style: userStyle, ...others } = props;
  let avatarSize = {};
  avatarSize[variant] = classes[sizes];
  const combinedClasses = {...avatarSize, ...userClasses};
  const combinedStyle = {...userStyle};
  return <Grid container spacing={1} alignItems="center">
    <Grid item>
      <MuiAvatar
        variant={variant}
        src={src}
        className={userClassName}
        classes={combinedClasses}
        style={combinedStyle}
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
  className: '',
  style: {},
}

Avatar.propTypes = {
  sizes: PropTypes.string,
  variant: PropTypes.string,
  src: PropTypes.string,
  classes: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object
}

export default Avatar;