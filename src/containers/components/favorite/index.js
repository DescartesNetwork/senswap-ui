import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';
import Drain from 'senswap-ui/drain';
import Favorite from 'senswap-ui/favorite';
import { withStyles } from 'senswap-ui/styles';

import styles from './styles';


const FavoriteComponent = () => {
  const [checkedStandard, setCheckedStandard] = React.useState(false);
  const [checkedCustom, setCheckedCustom] = React.useState(false);

  return <Grid container spacing={2}>
    <Grid item xs={12}>
      <Typography variant="h4">Favorite</Typography>
    </Grid>
    <Grid item xs={12}>
      <Drain size={2} />
    </Grid>
    <Grid item xs={12}>
      <Typography variant="subtitle1">Standard favorite</Typography>
    </Grid>
    <Grid item xs={12}>
      <Grid container spacing={2}>
        <Grid item>
          <Favorite checked={checkedStandard} onChange={setCheckedStandard} />
        </Grid>
        <Grid item>
          <Favorite checked={checkedStandard} onChange={setCheckedStandard} color='primary' />
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12}>
      <Typography variant="subtitle1">Customizable favorite</Typography>
    </Grid>
    <Grid item xs={12}>
      <Grid container spacing={2}>
        <Grid item>
          <Favorite checked={checkedCustom} onChange={setCheckedCustom} style={{ color: '#FBD40B' }} />
        </Grid>
        <Grid item>
          <Favorite checked={checkedCustom} onChange={setCheckedCustom} color='#a721b8' />
        </Grid>
        <Grid item>
          <Favorite checked={checkedCustom} onChange={setCheckedCustom} style={{ color: '#eca6f5' }} color='#eca6f5' />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
}

const mapStateToProps = state => ({
  ui: state.ui,
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(FavoriteComponent)));