import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import Icon from 'static/images/img-avatar.jpeg'
import { withStyles } from 'senswap-ui/styles';
import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';
import Drain from 'senswap-ui/drain';
import Avatar from 'senswap-ui/avatar';

import styles from './styles';


class AvatarComponent extends Component {
  constructor() {
    super();

    this.state = {
      elements: [
        {
          size: 'xsmall',
          label: 'Extra small avatar',
          variant: 'circular',
          src: '',
        },
        {
          size: 'small',
          label: 'Small avatar',
          variant: 'circular',
          src: '',
        },
        {
          size: 'medium',
          label: 'Medium avatar',
          variant: 'circular',
          src: '',
        },
        {
          size: 'large',
          label: 'Large avatar',
          variant: 'circular',
          src: '',
        },
        {
          size: '',
          label: 'Custom size avatar',
          variant: 'circular',
          src: '',
          customSize: {
            width: 80,
            height: 80,
            type: 'px',
          }
        },
      ],
      subtitle: 'Subtitle'
    }
  }

  render() {
    const { elements, subtitle } = this.state;
    const elementsAvatar = elements.map((e, idx) => {
      return <Grid container spacing={2} key={idx}>
        <Grid item xs={12}>
          <Typography variant="subtitle1">{e.label}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item>
              <Avatar size={e.size} variant={e.variant} src={e.src ? e.src : Icon} customSize={e.customSize ? e.customSize : null} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    });
    return <Grid container>
      <Grid item xs={12}>
        <Typography variant="h4">Avatar</Typography>
      </Grid>
      <Grid item xs={12}>
        <Drain size={2} />
      </Grid>
      <Grid item>
        {elementsAvatar}
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Avatar with label</Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item>
                <Avatar size="medium" variant="circular" src={Icon} subtitle={subtitle} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
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
)(withStyles(styles)(AvatarComponent)));