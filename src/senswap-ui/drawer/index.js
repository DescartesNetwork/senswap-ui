import React from 'react';
import PropTypes from 'prop-types';

import MuiDrawer from '@material-ui/core/Drawer';

import useStyles from './styles';

function Drawer(props) {
  const classes = useStyles();
  const {
    variant, open,
    className: userClassName,
    classes: userClasses,
    ...others
  } = props;

  const combinedClassName = `${classes.sidebar} ${userClassName}`;
  const { paper: userPaper, ...otherClasses } = userClasses;
  const combinedClasses = { paper: `${classes.paper} ${userPaper}`, ...otherClasses }

  return <MuiDrawer
    open={open}
    variant={variant}
    className={combinedClassName}
    classes={combinedClasses}
    style={open ? null : { width: 0 }}
    {...others}
  />
}

Drawer.defaultProps = {
  open: true,
  variant: 'persistent',
  className: '',
  classes: {},
}

Drawer.propTypes = {
  open: PropTypes.bool,
  variant: PropTypes.string,
  className: PropTypes.string,
  classes: PropTypes.object,
}

export default Drawer;