import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { } from '@material-ui/icons';

import Typography from 'components/typography';
import Drain from 'components/drain';

import styles from './styles';


class Installation extends Component {

  render() {
    // const { classes } = this.props;

    return <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">Installation</Typography>
      </Grid>
      <Grid item xs={12}>
        <Drain size={2} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">Npm</Typography>
        <Typography><code>npm i senswap-ui</code></Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">Fonts</Typography>
        <Typography><code>{'<link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,300;0,700;1,300;1,700&display=swap" rel="stylesheet">'}</code></Typography>
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