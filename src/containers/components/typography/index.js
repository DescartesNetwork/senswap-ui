import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { withStyles } from 'senswap-ui/styles';
import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';
import Drain from 'senswap-ui/drain';

import styles from './styles';


class TypographyComponent extends Component {

  render() {
    // const { classes } = this.props;

    return <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">Typography</Typography>
      </Grid>
      <Grid item xs={12}>
        <Drain size={2} />
      </Grid>
      <Grid item xs={12}>
        <Typography>variant: font/weight/size</Typography>
        <Typography variant="h1">h1: Poppins/600/48</Typography>
        <Typography variant="h2">h2: Poppins/700/40</Typography>
        <Typography variant="h3">h3: Inter/500/40</Typography>
        <Typography variant="h4">h4: Poppins/600/36</Typography>
        <Typography variant="h5">h5: Inter/500/24</Typography>
        <Typography variant="h6">h6: Poppins/600/18</Typography>
        <Typography variant="subtitle1">subtitle1: Inter/500/18</Typography>
        <Typography variant="subtitle2">subtitle2: Poppins/500/12</Typography>
        <Typography variant="body1">body1: Inter/400/14</Typography>
        <Typography variant="body2">body2: Inter/300/12</Typography>
        <Typography variant="caption">caption: Inter/300/9</Typography>
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