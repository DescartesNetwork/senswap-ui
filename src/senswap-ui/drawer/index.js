import React from 'react';
import PropTypes from 'prop-types';

import MuiDrawer from '@material-ui/core/Drawer';

import useStyles from './styles';

function Drawer(props) {
  const classes = useStyles();
  const { variant, classes: userClasses, ...others } = props;
  const { paper: userPaper, ...otherClasses } = userClasses;
  const defaultClasses = { paper: `${classes.paper} ${userPaper}`, ...otherClasses }

  return <MuiDrawer variant={variant} classes={defaultClasses} {...others} />
}

Drawer.defaultProps = {
  variant: 'persistent',
}

Drawer.propTypes = {
  variant: PropTypes.string,
}

export default Drawer;