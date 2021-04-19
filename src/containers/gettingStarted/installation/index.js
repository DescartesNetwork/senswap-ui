import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { withStyles } from 'senswap-ui/styles';
import Grid from 'senswap-ui/grid';
import Drain from 'senswap-ui/drain';
import Typography from 'senswap-ui/typography';

import styles from './styles';


class Installation extends Component {

  render() {
    // const { classes } = this.props;

    return <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">Installation</Typography>
      </Grid>
      <Grid item xs={12}>
        <Drain size={2} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">Npm</Typography>
      </Grid>
      <Grid item xs={12}>
        <SyntaxHighlighter language="bash" style={a11yDark} showLineNumbers wrapLongLines>
          {'npm i senswap-ui'}
        </SyntaxHighlighter>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">Fonts</Typography>
        <Typography>Add the CDN link below to your HTML file.</Typography>
      </Grid>
      <Grid item xs={12}>
        <SyntaxHighlighter language="htmlbars" style={a11yDark} showLineNumbers wrapLongLines>
          {'<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500&family=Poppins:wght@600;700&display=swap" rel="stylesheet">'}
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
)(withStyles(styles)(Installation)));