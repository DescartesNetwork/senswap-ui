import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { withStyles } from 'senswap-ui/styles';
import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';
import Drain from 'senswap-ui/drain';
import Chip from 'senswap-ui/chip';
import Link from 'senswap-ui/link';

import styles from './styles';


class BrandComponent extends Component {

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

      <Grid item xs={12}>
        <Typography variant="subtitle1">Custom color chip</Typography>
      </Grid>
      <Grid item xs={12}>
        <Chip cuscolor="#FF9F38" label="#FF9F38"/>
      </Grid>
      <Grid item xs={12}>
        <Chip cuscolor="orange" label="orange" />
      </Grid>
      <Grid item xs={12}>
        <Chip cuscolor="blue" label="blue"/>
      </Grid>
      <Grid item xs={12}>
        <Chip cuscolor="green" label="green"/>
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