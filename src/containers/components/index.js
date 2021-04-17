import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Grid from 'components/grid';
import Drain from 'components/drain';

import BrandComponent from './brand';
import ButtonComponent from './button';
import TypographyComponent from './typography';

import styles from './styles';


class Components extends Component {

  render() {
    // const { classes } = this.props;

    return <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h1">Components</Typography>
      </Grid>
      <Grid item xs={12}>
        <Drain />
      </Grid>
      <Grid item xs={12}>
        <Switch>
          <Redirect exact from="/components" to="/components/brand" />
          <Route path='/components/brand' component={BrandComponent} />
          <Route path='/components/button' component={ButtonComponent} />
          <Route path='/components/typography' component={TypographyComponent} />
        </Switch>
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
)(withStyles(styles)(Components)));