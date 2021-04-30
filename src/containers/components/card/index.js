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
          {[1, 2, 3].map(i => <Grid item xs={12} md={6} lg={4} key={i}>
            <CardPool
              symbols={['BTC', 'ETH', 'SOL']}
              icons={[
                'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
                'https://assets.coingecko.com/coins/images/4128/large/coinmarketcap-solana-200.png',
                'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
              ]}
              volume={1234567890}
              earning={1391.03}
              apr={120.1}
              stake={500}
              onConnect={i === 1 ? () => console.log('onConnect') : null}
              onDeposit={i === 2 || i === 3 ? () => console.log('onDeposit') : null}
              onWithdraw={i === 3 ? () => console.log('onWithdraw') : null}
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