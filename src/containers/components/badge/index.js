import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { withStyles } from 'senswap-ui/styles';
import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';
import Drain from 'senswap-ui/drain';
import Badge from 'senswap-ui/badge';
import Link from 'senswap-ui/link';

import styles from './styles';


class BrandComponent extends Component {

  render() {

    return <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">Badge</Typography>
      </Grid>
      <Grid item xs={12}>
        <Drain size={2} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">References</Typography>
      </Grid>
      <Grid item xs={12}>
        <Link href="https://material-ui.com/components/badges/">Material Badge System</Link>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="subtitle1">Custom color badge</Typography>
      </Grid>
      <Grid item xs={12}>
        <Badge cuscolor="#FF9F38" badgeContent="#FF9F38"/>
      </Grid>
      <Grid item xs={12}>
        <Badge cuscolor="orange" badgeContent="orange" />
      </Grid>
      <Grid item xs={12}>
        <Badge cuscolor="blue" badgeContent="blue"/>
      </Grid>
      <Grid item xs={12}>
        <Badge cuscolor="green" badgeContent="green"/>
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