import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';

import { } from '@material-ui/icons';

import Drain from 'components/drain';
import Brand from 'components/brand';
import Link from 'components/link';

import styles from './styles';


class Header extends Component {

  core = () => {
    return <Grid container spacing={2}>
      <Grid item xs={12}>
        <Brand subtitle="beta" />
      </Grid>
      <Grid item xs={12}>
        <Drain />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">Getting Started</Typography>
      </Grid>
      <Grid item xs={12}>
        <Link to="/getting-started/installation" >
          <Typography>Intallation</Typography>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link to="/getting-started/usage" >
          <Typography>Usage</Typography>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">Components</Typography>
      </Grid>
      <Grid item xs={12}>
        <Link to="/components/brand" >
          <Typography>Brand</Typography>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link to="/components/button" >
          <Typography>Button</Typography>
        </Link>
      </Grid>
    </Grid>
  }

  render() {
    const { classes } = this.props;

    return <Grid container spacing={2}>
      <Grid item xs={12}>
        <Drawer
          variant="permanent"
          className={classes.sidebar}
          classes={{
            paper: classes.paper,
          }}
        >
          {this.core()}
        </Drawer>
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
)(withStyles(styles)(Header)));