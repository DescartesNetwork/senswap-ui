import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import { GetAppRounded } from '@material-ui/icons';

import styles from './styles';


class Installation extends Component {

  render() {
    const { classes } = this.props;

    return <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={1} className={classes.noWrap} alignItems="center">
          <Grid item>
            <IconButton size="small">
              <GetAppRounded />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h6">Installation</Typography>
          </Grid>
        </Grid>
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
)(withStyles(styles)(Installation)));