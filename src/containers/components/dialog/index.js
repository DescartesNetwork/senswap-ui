import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { withStyles } from 'senswap-ui/styles';
import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';
import Drain from 'senswap-ui/drain';
import Button from 'senswap-ui/button';
import Dialog, { DialogTitle, DialogContent, DialogContentText, DialogActions } from 'senswap-ui/dialog';

import styles from './styles';


class DialogComponent extends Component {
  constructor() {
    super();

    this.state = {
      visible: true
    }
  }

  onClose = () => {
    return this.setState({ visible: false });
  }

  onOpen = () => {
    return this.setState({ visible: true });
  }

  render() {
    // const { classes } = this.props;
    const { visible } = this.state;

    return <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">Dialog</Typography>
      </Grid>
      <Grid item xs={12}>
        <Drain size={2} />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={this.onOpen}>
          <Typography>Open Dialog</Typography>
        </Button>
        <Dialog open={visible} onClose={this.onClose}>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Let Google help apps determine location. This means sending anonymous location data to
              Google, even when no apps are running.
          </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.onClose} color="primary" autoFocus>
              <Typography>Close</Typography>
            </Button>
          </DialogActions>
        </Dialog>
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
)(withStyles(styles)(DialogComponent)));