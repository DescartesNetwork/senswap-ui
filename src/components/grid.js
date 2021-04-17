import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import MuiGrid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  textColor: {
    color: theme.palette.text.primary
  }
}));

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