import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import MuiGrid from '@material-ui/core/Grid';
import MuiBox from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  textColor: {
    color: theme.palette.text.primary
  }
}));

export function Box(props) {
  const { ...others } = props;
  return <MuiBox {...others} />
}
function Grid(props) {
  const classes = useStyles();
  const { spacing, classes: userClasses, ...others } = props;
  const defaultProps = others.container ? { spacing, ...others } : { ...others }
  const defaultClasses = { root: classes.textColor, ...userClasses }
  return <MuiGrid {...defaultProps} classes={defaultClasses} />
}

Grid.defaultProps = {
  spacing: 2,
}

Grid.propTypes = {
  spacing: PropTypes.number,
}

export default Grid;