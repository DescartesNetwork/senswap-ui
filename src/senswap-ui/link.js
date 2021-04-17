import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

import { makeStyles } from 'senswap-ui/styles';
import Typography from 'senswap-ui/typography';

const useStyles = makeStyles(theme => ({
  link: {
    color: theme.palette.text.primary,
    textDecoration: 'none'
  }
}));

function Link(props) {
  const classes = useStyles();
  const { children, to } = props;
  return <Typography
    component={RouterLink}
    to={to}
    className={classes.link}
  >{children}</Typography>
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