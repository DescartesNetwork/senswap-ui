import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { withStyles } from 'senswap-ui/styles';
import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';
import Drain from 'senswap-ui/drain';
import Link from 'senswap-ui/link';

import styles from './styles';


class ChipComponent extends Component {

  render() {

    return <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">Chip</Typography>
      </Grid>
      <Grid item xs={12}>
        <Drain size={2} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">References</Typography>
      </Grid>
      <Grid item xs={12}>
        <Link href="https://material-ui.com/components/chips/">Material Chip System</Link>
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
)(withStyles(styles)(ChipComponent)));