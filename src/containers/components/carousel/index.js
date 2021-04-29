import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withStyles } from 'senswap-ui/styles';
import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';
import Drain from 'senswap-ui/drain';
import Carousel from 'senswap-ui/carousel';

import styles from './styles';


class CarouselComponent extends Component {

  render() {
    return <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h1">Carousel</Typography>
      </Grid>
      <Grid item xs={12}>
        <Drain />
      </Grid>
      <Grid item xs={12}>
        <Typography>Standard carousel</Typography>
      </Grid>
      <Grid item xs={12} md={7}>
        <Carousel data={[1, 2, 3, 4].map(e => {
          return {
            title: `About Senswap Pools ${e}`,
            description: 'To celebrate our new multi-chain deposit and withdrawal support for Bitcoin on TRON (BTCTRON), we’re beginning a 30-day net deposit…',
            onClick: 'func - btn',
            src: ''
          }
        })} />
      </Grid>
      <Grid item xs={12}>
        <Drain />
      </Grid>
      <Grid item xs={12}>
        <Typography>Carousel</Typography>
      </Grid>
      <Grid item xs={12} md={12}>
        <Carousel data={[1].map(e => {
          return {
            title: `About Senswap Pools ${e}`,
            subtitle: 'Unlock wallet',
            onClick: 'func - btn',
            button: 'Connect Wallet',
            src: ''
          }
        })} />
      </Grid>
    </Grid>
  }
}

const mapStateToProps = state => ({
  ui: state.ui
});

const mapDispatchToProps = dispacth => bindActionCreators({
}, dispacth);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(CarouselComponent)));