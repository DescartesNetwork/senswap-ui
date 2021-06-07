import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import CssBaseline from 'senswap-ui/cssBaseLine';

import { ThemeProvider, withStyles } from 'senswap-ui/styles';
import Grid from 'senswap-ui/grid';
import Drain from 'senswap-ui/drain';

// Static component
import Sidebar from 'containers/sidebar';
import UiUx from 'containers/uiux';
// Pages
import GettingStarted from 'containers/gettingStarted';
import Components from 'containers/components';
import NotFound from 'containers/404';

// CSS
import styles from './styles';


class App extends Component {

  render() {
    const { classes, theme } = this.props;

    return <ThemeProvider variant={theme}>
      <CssBaseline />
      <Grid container spacing={2}>
        {/* View */}
        <Grid item xs={12}>
          <Grid container spacing={2} className={classes.noWrap}>
            <Sidebar />
            <Grid item className={classes.stretch}>
              <Grid container spacing={2}>
                {/* Safe space */}
                <Grid item xs={12}>
                  <Drain size={0} />
                </Grid>
                {/* Pages */}
                <Grid item xs={12}>
                  <Switch>
                    <Redirect exact from="/" to="/getting-started" />
                    <Route path='/getting-started' component={GettingStarted} />
                    <Route path='/components' component={Components} />
                    <Route exact path='*' component={NotFound} />
                  </Switch>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* Application */}
        <Grid item xs={12}>
          <UiUx />
        </Grid>
      </Grid>
    </ThemeProvider>
  }
}

const mapStateToProps = state => ({
  theme: state.theme,
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(App)));
