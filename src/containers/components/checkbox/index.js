import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from 'senswap-ui/styles';

import Grid from 'senswap-ui/grid';
import CheckBox from 'senswap-ui/checkbox';
import styles from './styles';

class checkBox extends Component {
  constructor() {
    super();

    this.state = {
      checked: false
    }
  }

  onChecked = (checked) => {
    return this.setState({ checked });
  }

  render() {
    const { checked } = this.state;

    return <Grid container spacing={2}>
      <CheckBox checked={checked} onChange={this.onChecked} />
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
)(withStyles(styles)(checkBox)));

