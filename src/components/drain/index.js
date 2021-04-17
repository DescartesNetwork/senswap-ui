import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

import useStyles from './styles';

function Drain(props) {
  const classes = useStyles();
  const { size } = props;

  return <Grid container className={classes.fullWidth} style={{ height: size * 8 }} />
}

Drain.defaultProps = {
  size: 6,
}

Drain.propTypes = {
  size: PropTypes.number,
}

export default Drain;