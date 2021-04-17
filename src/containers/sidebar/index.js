import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import Drawer from '@material-ui/core/Drawer';

import { withStyles } from 'senswap-ui/styles';
import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';
import Drain from 'senswap-ui/drain';
import Brand from 'senswap-ui/brand';
import Link from 'senswap-ui/link';

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
        <Typography variant="h6">Getting Started</Typography>
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
        <Typography variant="h6">Components</Typography>
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
      <Grid item xs={12}>
        <Link to="/components/typography" >
          <Typography>Typography</Typography>
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