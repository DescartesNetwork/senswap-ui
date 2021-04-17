import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { } from '@material-ui/icons';

import Typography from 'components/typography';

import styles from './styles';


class Usage extends Component {

  render() {
    // const { classes } = this.props;

    return <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">Usage</Typography>
      </Grid>
      <Grid item xs={12}>
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