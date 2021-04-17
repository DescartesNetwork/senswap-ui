import React from 'react';
// import PropTypes from 'prop-types';

import { ThemeProvider } from '@material-ui/core/styles';
import MuiTypography from '@material-ui/core/Typography';

import theme from 'static/styles/theme';
// import useStyles from './styles';

function Typography(props) {
  // const classes = useStyles();

  return <ThemeProvider theme={theme}>
    <MuiTypography {...props} />
  </ThemeProvider>
}

Typography.defaultProps = {
}

Typography.propTypes = {
}

export default Typography;