import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

import MuiLink from '@material-ui/core/Link';

import { makeStyles } from 'senswap-ui/styles';
import Typography from 'senswap-ui/typography';

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: 'none'
  }
}));

function Link(props) {
  const classes = useStyles();
  const { children, to, href, className: userClassName, ...others } = props;
  const combinedClassName = `${classes.link} ${userClassName}`;

  if (href) return <Typography
    component={MuiLink}
    href={href}
    className={combinedClassName}
    target="_blank" rel="noopener noreferrer"
    {...others}
  >{children}</Typography>
  
  return <Typography
    component={RouterLink}
    to={to}
    className={combinedClassName}
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