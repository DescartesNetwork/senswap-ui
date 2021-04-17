import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

function Link(props) {
  const classes = useStyles();
  const { children, to } = props;
  return <Typography component={RouterLink} to={to} className={classes.link}>{children}</Typography>
}

Link.defaultProps = {
  children: '',
  to: '#',
}

Link.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  to: PropTypes.string,
}

export default Link;