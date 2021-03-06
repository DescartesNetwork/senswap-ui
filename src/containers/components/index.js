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
import PaginationComponent from './pagination';
import AvatarComponent from './avatar';
import ChipComponent from './chip';
import ListComponent from './list';
import DrawerComponent from './drawer';
import TableComponent from './table';
import TooltipComponent from './tooltip';
import IconsComponent from './icons';
import CarouselComponent from './carousel';
import TextFieldComponent from './textField';
import DialogComponent from './dialog';
import SwitchComponent from './switch';
import BoxComponent from './box';
import CssBaseLineComponent from './cssBaseLine';

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
          <Route path='/components/css-baseline' component={CssBaseLineComponent} />
          <Redirect exact from="/components" to="/components/brand" />
          <Route path='/components/grid' component={GridComponent} />
          <Route path='/components/brand' component={BrandComponent} />
          <Route path='/components/button' component={ButtonComponent} />
          <Route path='/components/typography' component={TypographyComponent} />
          <Route path='/components/favorite' component={FavoriteComponent} />
          <Route path='/components/logo' component={LogoComponent} />
          <Route path='/components/pagination' component={PaginationComponent} />
          <Route path='/components/chip' component={ChipComponent} />
          <Route path='/components/avatar' component={AvatarComponent} />
          <Route path='/components/list' component={ListComponent} />
          <Route path='/components/drawer' component={DrawerComponent} />
          <Route path='/components/table' component={TableComponent} />
          <Route path='/components/tooltip' component={TooltipComponent} />
          <Route path='/components/icons' component={IconsComponent} />
          <Route path='/components/carousel' component={CarouselComponent} />
          <Route path='/components/text-field' component={TextFieldComponent} />
          <Route path='/components/dialog' component={DialogComponent} />
          <Route path='/components/switch' component={SwitchComponent} />
          <Route path='/components/box' component={BoxComponent} />
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
