import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import MuiDrawer from '@material-ui/core/Drawer';

import useStyles from './styles';

const Drawer = forwardRef((props, ref) => {
  const classes = useStyles();
  const {
    variant, open,
    className: userClassName,
    classes: userClasses,
    style: userStyle,
    onWidth,
    ...others
  } = props;

  const combinedClassName = `${classes.sidebar} ${userClassName}`;
  const { paper: userPaper, ...otherClasses } = userClasses;
  const combinedClasses = { paper: `${classes.paper} ${userPaper}`, ...otherClasses }
  const combinedStyle = { ...userStyle, ...(open ? {} : { width: 0 }) }

  return <MuiDrawer
    ref={ref}
    open={open}
    variant={variant}
    className={combinedClassName}
    classes={combinedClasses}
    style={combinedStyle}
    {...others}
  />
})

Drawer.defaultProps = {
  open: true,
  variant: 'persistent',
  className: '',
  classes: {},
  style: {},
}

Drawer.propTypes = {
  open: PropTypes.bool,
  variant: PropTypes.string,
  className: PropTypes.string,
  classes: PropTypes.object,
  style: PropTypes.object,
}

export default Drawer;