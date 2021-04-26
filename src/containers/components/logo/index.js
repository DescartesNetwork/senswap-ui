import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';
import Drain from 'senswap-ui/drain';
import Logo from 'senswap-ui/logo';
import { withStyles } from 'senswap-ui/styles';

import BITCOIN_LOGO from './bitcoin.svg';
import styles from './styles';


const LogoComponent = () => {

  return <Grid container spacing={2}>
    <Grid item xs={12}>
      <Typography variant="h4">Logo</Typography>
    </Grid>
    <Grid item xs={12}>
      <Drain size={2} />
    </Grid>
    <Grid item xs={12}>
      <Typography variant="subtitle1">Logo size variation</Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography variant="subtitle2">Large</Typography>
      <Drain size={2} />
      <Logo src={BITCOIN_LOGO} logoSize='large' />
    </Grid>
    <Grid item xs={12}>
      <Typography variant="subtitle2">Default</Typography>
      <Drain size={2} />
      <Logo src={BITCOIN_LOGO} />
    </Grid>
    <Grid item xs={12}>
      <Typography variant="subtitle2">Medium</Typography>
      <Drain size={2} />
      <Logo src={BITCOIN_LOGO} logoSize='medium' />
    </Grid>
    <Grid item xs={12}>
      <Typography variant="subtitle2">Small</Typography>
      <Drain size={2} />
      <Logo src={BITCOIN_LOGO} logoSize='small' />
    </Grid>    <Grid item xs={12}>
      <Typography variant="subtitle2">Tiny</Typography>
      <Drain size={2} />
      <Logo src={BITCOIN_LOGO} logoSize='tiny' />
    </Grid>
  </Grid>
}

const mapStateToProps = state => ({
  ui: state.ui,
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(LogoComponent)));