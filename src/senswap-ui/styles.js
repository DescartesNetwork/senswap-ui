import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, withStyles, useTheme, makeStyles } from '@material-ui/core/styles';

import theme from 'senswap-ui/theme';

function ThemeProvider(props) {
  const { variant, ...others } = props;
  return <MuiThemeProvider theme={theme(variant)} {...others} />
}

ThemeProvider.defaultProps = {
  variant: 'dark',
}

ThemeProvider.propTypes = {
  variant: PropTypes.string,
}

export { ThemeProvider, withStyles, useTheme, makeStyles }