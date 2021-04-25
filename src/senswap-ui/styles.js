import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, withStyles, useTheme, makeStyles } from '@material-ui/core/styles';

import theme from 'senswap-ui/theme';

function ThemeProvider(props) {
  const { variant, ...others } = props;
  if (variant === 'light') require('senswap-ui/light.css');
  else require('senswap-ui/dark.css');
  return <MuiThemeProvider theme={theme} {...others} />
}

ThemeProvider.defaultProps = {
  variant: "dark",
}

ThemeProvider.propTypes = {
  variant: PropTypes.string,
}

export { ThemeProvider, withStyles, useTheme, makeStyles }