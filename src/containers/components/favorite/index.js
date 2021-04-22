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
  const [checkedWhite, setCheckedWhite] = React.useState(false);
  const [checkedYellow, setCheckedYellow] = React.useState(false);
  const [checkedGreen, setCheckedGreen] = React.useState(false);

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
      <Favorite checked={checkedStandard} onChange={setCheckedStandard} />
    </Grid>
    <Grid item xs={12}>
      <Typography variant="subtitle1">Custom color favorite</Typography>
    </Grid>
    <Grid item xs={12}>
      <Grid container spacing={2}>
        <Grid item>
          <Typography>White
            <Favorite checked={checkedWhite} onChange={setCheckedWhite} color='white' />
          </Typography>
        </Grid>
        <Grid item>
          <Typography>Yellow
            <Favorite checked={checkedYellow} onChange={setCheckedYellow} color='yellow' />
          </Typography>
        </Grid>
        <Grid item>
          <Typography>Green
            <Favorite checked={checkedGreen} onChange={setCheckedGreen} color='#03f530' />
          </Typography>
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