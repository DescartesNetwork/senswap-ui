import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import { withStyles } from 'senswap-ui/styles';
import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';
import Drain from 'senswap-ui/drain';

import GridComponent from './grid';
import BrandComponent from './brand';
import ButtonComponent from './button';
import TypographyComponent from './typography';
import FavoriteComponent from './favorite';
import LogoComponent from './logo';
import CheckboxComponent from './checkbox';
import PaginationComponent from './pagination';
import CardComponent from './card';
import AvatarComponent from './avatar';

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
          <Route path='/components/grid' component={GridComponent} />
          <Route path='/components/brand' component={BrandComponent} />
          <Route path='/components/button' component={ButtonComponent} />
          <Route path='/components/typography' component={TypographyComponent} />
          <Route path='/components/favorite' component={FavoriteComponent} />
          <Route path='/components/logo' component={LogoComponent} />
          <Route path='/components/checkbox' component={CheckboxComponent} />
          <Route path='/components/pagination' component={PaginationComponent} />
          <Route path='/components/card' component={CardComponent} />
          <Route path='/components/avatar' component={AvatarComponent} />
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