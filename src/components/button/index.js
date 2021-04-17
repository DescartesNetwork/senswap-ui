import React from 'react';
// import PropTypes from 'prop-types';

import { ThemeProvider } from '@material-ui/core/styles';
import MuiButton from '@material-ui/core/Button';

import theme from 'static/styles/theme';
// import useStyles from './styles';

function Button(props) {
  // const classes = useStyles();

  return <ThemeProvider theme={theme}>
    <MuiButton {...props} />
  </ThemeProvider>
}

Button.defaultProps = {
}

Button.propTypes = {
}

export default Button;