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


class TypographyComponent extends Component {

  render() {
    // const { classes } = this.props;

    return <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">Typography</Typography>
      </Grid>
      <Grid item xs={12}>
        <Drain size={2} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h1">h1</Typography>
        <Typography variant="h2">h2</Typography>
        <Typography variant="h3">h3</Typography>
        <Typography variant="h4">h4</Typography>
        <Typography variant="h5">h5</Typography>
        <Typography variant="h6">h6</Typography>
        <Typography variant="body1">body1</Typography>
        <Typography variant="body2">body2</Typography>
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
)(withStyles(styles)(TypographyComponent)));