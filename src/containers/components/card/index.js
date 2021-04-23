import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { Card, CardBalance } from 'senswap-ui/card';

import { withStyles } from 'senswap-ui/styles';
import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';
import Drain from 'senswap-ui/drain';

import styles from './styles'

class MuiCard extends Component {
  constructor() {
    super();
    this.state = {
      button: 'Details',
      cards: [
        {
          subtitle: 'Bitcoin',
          earned: '1.21425',
          apr: '127.90%',
          stake: '0.0000',
          description: 'Bitcoin earned',
        },
        {
          subtitle: 'ETH',
          earned: '1.21425',
          apr: '127.90%',
          stake: '0.0000',
          description: 'Etherium earned',
        },
        {
          subtitle: 'QTU',
          earned: '1.21425',
          apr: '127.90%',
          stake: '0.0000',
          description: 'QTum earned',
        },
        {
          subtitle: 'ADA',
          earned: '1.21425',
          apr: '127.90%',
          stake: '0.0000',
          description: 'ADA shelly earned',
        },
        {
          subtitle: 'ATOM',
          earned: '1.21425',
          apr: '127.90%',
          stake: '0.0000',
          description: 'ATOM earned',
        }
      ],
    }
  }
  render() {
    const { cards, button } = this.state;
    function handleClickCard(e){
      console.log(e)
    }
    var cardElements = cards.map((e, idx) => {
      return <Grid item xs={4} key={idx}>
        <Card
          cardData={e}
          subtitle={e.subtitle}
          button={button}
          onClickCardDetails={handleClickCard}
        />
      </Grid>
    });
    return <Grid container direction="column">
      <Typography variant="h4">Card</Typography>
      <Drain />
      <Grid>
        <Typography>Card details</Typography>
        <Drain size={2} />
        <Grid container>
          {cardElements}
        </Grid>
      </Grid>
      <Drain />
      <Grid>
        <Typography>Card balance</Typography>
        <Drain size={2} />
        <Grid container>
          <Grid item>
            <CardBalance />
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
)(withStyles(styles)(MuiCard)));