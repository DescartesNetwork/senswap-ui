import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { withStyles } from 'senswap-ui/styles';
import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';

import styles from './styles';

const THEME_PROVIDER = `import ThemeProvider from 'senswap-ui';

class App extends Component {

  render() {
    const { classes } = this.props;

    return <ThemeProvider variant="dark">
      <Grid container spacing={2}>
        // ...
      </Grid>
    </ThemeProvider>
  }
}`


class Usage extends Component {

  render() {
    // const { classes } = this.props;

    return <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">Usage</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">Theme provider</Typography>
      </Grid>
      <Grid item xs={12}>
        <SyntaxHighlighter language="jsx" style={a11yDark} showLineNumbers wrapLongLines>
          {THEME_PROVIDER}
        </SyntaxHighlighter>
      </Grid>
    </Grid>
  }
}

const mapStateToProps = state => ({
  ui: state.ui,
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Usage)));