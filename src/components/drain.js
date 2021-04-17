import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  fullWidth: {
    width: '100%',
  },
}));

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