import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Grid from 'components/grid';
import Drain from 'components/drain';

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
        <Typography><code>npm i senswap-ui</code></Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">Fonts</Typography>
        <Typography><code>{'<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500&family=Poppins:wght@600;700&display=swap" rel="stylesheet">'}</code></Typography>
        <Typography>Add the CDN link above to your HTML file.</Typography>
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