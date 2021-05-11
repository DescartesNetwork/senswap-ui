import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import Grid from 'senswap-ui/grid';
import { withStyles } from 'senswap-ui/styles';
import Typography from 'senswap-ui/typography';
import Drain from 'senswap-ui/drain';
import Button from 'senswap-ui/button';

import Noti from 'senswap-ui/noti';

import iconSuccess from 'static/images/icon-success.png';
import iconWarning from 'static/images/icon-warning.png';
import iconCancel from 'static/images/icon-cancel.png';

import styles from './styles';

class Notify extends Component {
  constructor() {
    super();

    this.state = {
      visible1: true,
      visible2: false,
      visible3: false
    }
  }

  onOpen = (e) => {
    switch (e) {
      case 1:
        return this.setState({ visible1: true });
      case 2:
        return this.setState({ visible2: true });
      case 3:
        return this.setState({ visible3: true });
      default:
        break;
    }
  }
  onClose = (e) => {
    switch (e) {
      case 1:
        return this.setState({ visible1: false });
      case 2:
        return this.setState({ visible2: false });
      case 3:
        return this.setState({ visible3: false });
      default:
        break;
    }
  }

  render() {
    const { visible1, visible2, visible3 } = this.state;
    const messages = 'Thanks for ordering! We will let you know when it will be sent to your address';
    const images = [iconSuccess, iconWarning, iconCancel];

    const hanldeState = (e) => {
      switch (e) {
        case 0:
          return visible1;
        case 1:
          return visible2;
        case 2:
          return visible3;
        default:
          return false;
      }
    }

    return <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h1">Notifications</Typography>
      </Grid>
      <Drain />
      <Grid item xs={12}>
        <Grid container spacing={0}>
          {[1, 2, 3].map((e, idx) => {
            return <Grid item xs={12} key={idx}>
              <Button onClick={() => this.onOpen(e)}>Notification {e}</Button>
            </Grid>
          })}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        {['Success', 'Warning', 'Cancel'].map((e, idx) => {
          const isOpen = hanldeState(idx)
          return <Noti maxWidth="xs" open={isOpen} status={e} message={messages} onClose={() => this.onClose(idx + 1)} key={idx} src={images[idx]} />
        })}
      </Grid>
    </Grid>
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Notify)));