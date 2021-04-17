import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

import Grid from 'components/grid';
import Drain from 'components/drain';

// Static component
import Sidebar from 'containers/sidebar';
import UiUx from 'containers/uiux';
// Pages
import GettingStarted from 'containers/gettingStarted';
import Components from 'containers/components';
import NotFound from 'containers/404';

// CSS
import theme from 'static/styles/theme';
import 'static/styles/index.css';
import styles from './styles';


class App extends Component {

  render() {
    const { classes } = this.props;

    return <ThemeProvider theme={theme}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2} className={classes.noWrap}>
            <Grid item>
              <Sidebar />
            </Grid>
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
        <Grid item xs={12} >
          <UiUx />
        </Grid>
      </Grid>
    </ThemeProvider>
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(App)));
