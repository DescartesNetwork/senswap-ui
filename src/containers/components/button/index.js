import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';


import { withStyles } from 'senswap-ui/styles';
import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';
import Drain from 'senswap-ui/drain';
import Button, { IconButton } from 'senswap-ui/button';

import { HomeRounded } from 'senswap-ui/icons'

import styles from './styles';


class ButtonComponent extends Component {

  render() {
    // const { classes } = this.props;

    return <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">Button</Typography>
      </Grid>
      <Grid item xs={12}>
        <Drain size={2} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">Text buttons</Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item>
            <Button>
              <Typography>Button</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button color="primary">
              <Typography>Button</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button color="secondary">
              <Typography>Button</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button disabled>
              <Typography>Button</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">Contained buttons</Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item>
            <Button variant="contained">
              <Typography>Button</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">
              <Typography>Button</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary">
              <Typography>Button</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" disabled>
              <Typography>Button</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">Outlined buttons</Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item>
            <Button variant="outlined">
              <Typography>Button</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary">
              <Typography>Button</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="secondary">
              <Typography>Button</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" disabled>
              <Typography>Button</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">Icon buttons</Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item>
            <IconButton>
              <HomeRounded />
            </IconButton>
          </Grid>
        </Grid>
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
)(withStyles(styles)(ButtonComponent)));