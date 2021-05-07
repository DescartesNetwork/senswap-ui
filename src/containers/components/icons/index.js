import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import Grid from 'senswap-ui/grid';
import Link from 'senswap-ui/link';
import Drain from 'senswap-ui/drain';
import Typography from 'senswap-ui/typography';
import { withStyles } from 'senswap-ui/styles';
import { HomeIcon, PoolsIcon, SwapIcon, WalletIcon } from 'senswap-ui/supplementIcons';

import styles from './styles';


class IconsComponent extends Component {

  render() {
    return <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">Material Icons</Typography>
      </Grid>
      <Grid item xs={12}>
        <Drain size={2} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">Supplement Icons</Typography>
      </Grid>
      <Grid item>
        <HomeIcon />
      </Grid>
      <Grid item>
        <SwapIcon />
      </Grid>
      <Grid item>
        <PoolsIcon />
      </Grid>
      <Grid item>
        <WalletIcon htmlColor="#FF3122"/>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item>
            <HomeIcon />
          </Grid>
          <Grid item>
            <SwapIcon />
          </Grid>
          <Grid item>
            <PoolsIcon />
          </Grid>
          <Grid item>
            <WalletIcon htmlColor="#FF3122" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">References</Typography>
      </Grid>
      <Grid item xs={12}>
        <Link href="https://material-ui.com/components/material-icons/">Material Icons default set</Link>
      </Grid>
      <Grid item xs={12}>
        <Link href="https://material-ui.com/components/icons/">Material UI Icons System</Link>
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
)(withStyles(styles)(IconsComponent)));