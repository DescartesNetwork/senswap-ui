import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { withStyles } from 'senswap-ui/styles';
import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';
import Drain from 'senswap-ui/drain';
import Switch from 'senswap-ui/switch';

import styles from './styles';


class SwitchComponent extends Component {
  constructor() {
    super();
    this.switchRef = React.createRef();
  }
  
  render() {
    
    const onChange = () => {
      const isChecked = this.switchRef.current.checked;
      console.log('change', isChecked)
    }

    return <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography>Switch</Typography>
      </Grid>
      <Grid item xs={12}>
        <Drain />
      </Grid>
      <Grid item xs={12}>
        <Typography>Standard switch</Typography>
      </Grid>
      <Grid item xs={12}>
        <Switch ref={this.switchRef} onChange={onChange}/>
      </Grid>
      <Grid item xs={12}>
        <Drain />
      </Grid>
      <Grid item xs={12}>
        <Typography>Senswap switch</Typography>
      </Grid>
      <Grid item xs={12}>
        <Switch variant="contained" ref={this.switchRef} onChange={onChange}/>
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
)(withStyles(styles)(SwitchComponent)));