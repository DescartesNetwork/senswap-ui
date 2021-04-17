import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link as RouterLink, withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import CircularProgress from '@material-ui/core/CircularProgress';
import Image from 'material-ui-image';

import { } from '@material-ui/icons';

import styles from './styles';
import configs from 'configs';
import SEN_LOGO from 'static/images/sen-logo.svg';


class Header extends Component {

  render() {
    const { classes } = this.props;
    const { basics: { subversion } } = configs;

    return <Grid container justify="center" spacing={2}>
      <Grid item xs={11}>
        <Grid container spacing={2} className={classes.noWrap} alignItems="center">
          {/* Logo */}
          <Grid item className={classes.logo}>
            <Link color="textPrimary" underline="none" component={RouterLink} to={'/swap'}>
              <Grid container spacing={1} alignItems="center" className={classes.noWrap}>
                <Grid item style={{ width: 40 }}>
                  <Image
                    src={SEN_LOGO}
                    color="#00000000"
                    loading={<CircularProgress size={17} />}
                  />
                </Grid>
                <Grid item>
                  <Typography className={classes.subtitle}>{subversion}</Typography>
                  <Typography variant="h6" noWrap>SenSwap</Typography>
                </Grid>
              </Grid>
            </Link>
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
)(withStyles(styles)(Header)));