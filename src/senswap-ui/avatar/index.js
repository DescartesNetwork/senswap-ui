import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import MuiAvatar from '@material-ui/core/Avatar';

import useStyles from './style';


const Avatar = forwardRef((props, ref) => {
  const classes = useStyles();
  const { size, variant, src, classes: userClasses, ...others } = props;
  let defaultClasses = { [variant]: classes[size] }
  const combinedClasses = { ...defaultClasses, ...userClasses }
  return <MuiAvatar
    variant={variant}
    src={src}
    classes={combinedClasses}
    {...others}
    ref={ref}
  />
});

Avatar.defaultProps = {
  size: 'xsmall',
  variant: 'circular',
  src: null,
}

Avatar.propTypes = {
  size: PropTypes.string,
  variant: PropTypes.string,
  src: PropTypes.string,
}

export default Avatar;