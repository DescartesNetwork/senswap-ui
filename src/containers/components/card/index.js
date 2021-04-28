import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { CardPool, CardBalance } from 'senswap-ui/card';

import { withStyles } from 'senswap-ui/styles';
import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';
import Drain from 'senswap-ui/drain';

import styles from './styles';

class CardComponent extends Component {
  constructor() {
    super();
    this.state = {
      button: 'See details',
      cardBalance: {
        title: 'Total Balance',
        color: '#FF9F38',
        amount: '12.23148',
        exchange: '1,700.96 USD',
        chip: 'ETH'
      }
    }
  }
  render() {
    const { cardBalance } = this.state;

    function handleClickDeposit(e) {
      console.log('<<<====== click', e);
    }
    function handleClickWithdraw(e) {
      console.log('<<<====== click', e);
    }

    return <Grid container direction="column">
      <Grid item xs={12}>
        <Typography variant="h4">Card</Typography>
      </Grid>
      <Grid item xs={12}>
        <Drain />
      </Grid>
      <Grid item xs={12}>
        <Typography>Card details</Typography>
      </Grid>
      <Grid item xs={12}>
        <Drain size={1} />
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          {[1, 2, 3, 4].map(i => <Grid item xs={12} md={6} lg={4} key={i}>
            <CardPool
              name="Solana"
              symbol="SOL"
              icon="https://assets.coingecko.com/coins/images/4128/large/coinmarketcap-solana-200.png?1616489452"
              earning={1391.03}
              apr={120.1}
              stake={500}
              onClick={() => console.log('Click CardPool')}
            />
          </Grid>
          )}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Drain />
      </Grid>
      <Grid item xs={12}>
        <Typography>Card balance</Typography>
      </Grid>
      <Grid item xs={12}>
        <Drain size={1} />
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12} md={6} lg={4}>
            <CardBalance
              cardData={cardBalance}
              onClickDeposit={handleClickDeposit}
              onClickWithdraw={handleClickWithdraw}
            />
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
)(withStyles(styles)(CardComponent)));