import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { withStyles } from 'senswap-ui/styles';
import Grid from 'senswap-ui/grid';

import styles from './styles';
import { setScreen } from 'modules/ui.reducer';


class UiUx extends Component {

  componentDidMount() {
    this.listenResizeEvents();
  }

  listenResizeEvents = () => {
    const { setScreen } = this.props;
    setScreen(window.innerWidth); // Init
    return window.onresize = () => {
      return setScreen(window.innerWidth);
    }
  }

  render() {
    // const { classes } = this.props;

    return <Grid container spacing={2}>
      <Grid item xs={12}>
      </Grid>
    </Grid >
  }
}

const mapStateToProps = state => ({
  ui: state.ui,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setScreen,
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(UiUx)));