import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

import MuiLink from '@material-ui/core/Link';

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
  const { children, to, href, ...others } = props;
  if (href) return <Typography
    component={MuiLink}
    href={href}
    className={classes.link}
    target="_blank" rel="noopener noreferrer"
    {...others}
  >{children}</Typography>
  return <Typography
    component={RouterLink}
    to={to}
    className={classes.link}
    {...others}
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
  href: PropTypes.string,
}

export default Link;