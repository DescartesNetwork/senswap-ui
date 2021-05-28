import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import MuiAvatar from '@material-ui/core/Avatar';
import MuiAvatarGroup from '@material-ui/lab/AvatarGroup';

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

export const AvatarGroup = forwardRef((props, ref) => {
  const classes = useStyles();
  const { size, classes: userClasses, ...others } = props;
  let defaultClasses = { avatar: classes[size] }
  const combinedClasses = { ...defaultClasses, ...userClasses }
  return <MuiAvatarGroup classes={combinedClasses} {...others} ref={ref} />
});

AvatarGroup.defaultProps = {
  size: 'xsmall',
}

AvatarGroup.propTypes = {
  size: PropTypes.string,
}