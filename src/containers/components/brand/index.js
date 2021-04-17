import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { } from '@material-ui/icons';

import Grid from 'components/grid';
import Drain from 'components/drain';
import Brand from 'components/brand';

import styles from './styles';


class BrandComponent extends Component {

  render() {
    // const { classes } = this.props;

    return <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">Brand</Typography>
      </Grid>
      <Grid item xs={12}>
        <Drain size={2} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">Standard brand</Typography>
      </Grid>
      <Grid item xs={12}>
        <Brand />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">Brand with subtitle</Typography>
      </Grid>
      <Grid item xs={12}>
        <Brand subtitle="subtitle" />
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
)(withStyles(styles)(BrandComponent)));