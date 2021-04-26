import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';
import Drain from 'senswap-ui/drain';
import ActivitiesList from 'senswap-ui/list/activitiesList'
import { withStyles } from 'senswap-ui/styles';

import styles from './styles';

const ListComponent = () => {
  // Assume that data is an JSON file
  const data = [
    {
      id: 1,
      action: "withdraw",
      status: "complete",
      amount: 969.06654889,
      coinUnit: "USDT",
    },
    {
      id: 2,
      action: "deposit",
      status: "complete",
      amount: 0.206654889,
      coinUnit: "BTC",
    },
    {
      id: 3,
      action: "deposit",
      status: "inProgress",
      amount: 0.531676712,
      coinUnit: "BTC",
    },
    {
      id: 4,
      action: "deposit",
      status: "complete",
      amount: 0.69696969,
      coinUnit: "ETH",
    },
    {
      id: 5,
      action: "withdraw",
      status: "complete",
      amount: 969.69696969,
      coinUnit: "ETH",
    },
    {
      id: 6,
      action: "withdraw",
      status: "complete",
      amount: 969.69696969,
      coinUnit: "ETH",
    }
  ];

  return <Grid container spacing={2}>
    <Grid item xs={12}>
      <Typography variant="h4">Latest activities list</Typography>
    </Grid>
    <Grid item xs={12}>
      <Drain size={2} />
    </Grid>
    <Grid item xs={12}>
      <Typography variant="subtitle1">Latest Activities</Typography>
    </Grid>
    <ActivitiesList data={data} />
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
)(withStyles(styles)(ListComponent)));