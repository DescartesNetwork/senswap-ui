import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { withStyles } from 'senswap-ui/styles';
import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';
import Drain from 'senswap-ui/drain';
import Brand from 'senswap-ui/brand';
import Link from 'senswap-ui/link';
import Drawer from 'senswap-ui/drawer';
import Switch from 'senswap-ui/switch';
import { WbSunny, NightsStay } from 'senswap-ui/icons';

import { setTheme } from 'modules/theme.reducer';

import styles from './styles';


class Sidebar extends Component {
  constructor() {
    super();

    this.switchRef = React.createRef();
  }

  core = () => {
    return <Grid container spacing={2}>
      <Grid item xs={12}>
        <Brand subtitle="beta" />
      </Grid>
      <Grid item xs={12}>
        <Drain />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">Getting Started</Typography>
      </Grid>
      <Grid item xs={12}>
        <Link color="textPrimary" to="/getting-started/installation" >
          <Typography>Installation</Typography>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link color="textPrimary" to="/getting-started/usage" >
          <Typography>Usage</Typography>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">Components</Typography>
      </Grid>
      <Grid item xs={12}>
        <Link color="textPrimary" to="/components/css-baseline" >
          <Typography>CssBaseLine</Typography>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link color="textPrimary" to="/components/avatar" >
          <Typography>Avatar</Typography>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link color="textPrimary" to="/components/brand" >
          <Typography>Brand</Typography>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link color="textPrimary" to="/components/button" >
          <Typography>Button</Typography>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link color="textPrimary" to="/components/grid" >
          <Typography>Grid</Typography>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link color="textPrimary" to="/components/box" >
          <Typography>Box</Typography>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link color="textPrimary" to="/components/icons" >
          <Typography>Icons</Typography>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link color="textPrimary" to="/components/logo" >
          <Typography>Logo</Typography>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link color="textPrimary" to="/components/favorite" >
          <Typography>Favorite</Typography>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link color="textPrimary" to="/components/paper" >
          <Typography>Paper</Typography>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link color="textPrimary" to="/components/typography" >
          <Typography>Typography</Typography>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link color="textPrimary" to="/components/pagination" >
          <Typography>Pagination</Typography>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link color="textPrimary" to="/components/chip" >
          <Typography>Chip</Typography>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link color="textPrimary" to="/components/list" >
          <Typography>List</Typography>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link color="textPrimary" to="/components/drawer" >
          <Typography>Drawer</Typography>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link color="textPrimary" to="/components/table" >
          <Typography>Table</Typography>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link color="textPrimary" to="/components/tooltip" >
          <Typography>Tooltip</Typography>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link color="textPrimary" to="/components/carousel" >
          <Typography>Carousel</Typography>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link color="textPrimary" to="/components/text-field" >
          <Typography>Text Field</Typography>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link color="textPrimary" to="/components/dialog" >
          <Typography>Dialog</Typography>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link color="textPrimary" to="/components/switch" >
          <Typography>Switch</Typography>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Drain size={2} />
      </Grid>
    </Grid>
  }

  render() {
    const { theme } = this.props;

    const onChange = () => {
      const { setTheme } = this.props;
      const type = this.switchRef.current.checked;
      return setTheme(type)
    }
    return <Drawer>
      {this.core()}
      <Grid item xs={12} >
        <Grid container spacing={2}>
          <Grid item xs={2}>
            {theme === 'dark' ? <NightsStay /> : <WbSunny />}
          </Grid>
          <Grid item xs={10}>
            <Switch variant="contained" ref={this.switchRef} onChange={onChange} checked={theme === 'dark'} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Drain size={4} />
      </Grid>
    </Drawer>
  }
}

const mapStateToProps = state => ({
  ui: state.ui,
  theme: state.theme,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setTheme,
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Sidebar)));