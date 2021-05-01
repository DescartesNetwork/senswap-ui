import React, { useState } from 'react';
import TypeProps from 'prop-types';
import _clsx from 'clsx';

import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';
import Chip from 'senswap-ui/chip';
import Button from 'senswap-ui/button';
import Card, { CardContent } from 'senswap-ui/card';

import { Visibility, VisibilityOff, CallReceived } from 'senswap-ui/icons';

import useStyle from './styles';

function CardBalance(props) {
  const classes = useStyle();

  const { cardData, onDeposit, onWithdraw } = props;

  const [isEyeOff, setEyeOff] = useState(false);
  const [isExpand, setExpand] = useState(false);

  function onShowBalance() {
    return setEyeOff(!isEyeOff);
  }
  function onExpandCard() {
    return setExpand(!isExpand);
  }

  return <Grid container spacing={0}>
    <Grid item xs={12}>
      <Card className={_clsx(classes.card, { [classes.cardExpand]: isExpand })}>
        <CardContent className={classes.cardBalanceContent}>
          <Grid container>
            <Grid item xs={12} align="right" className={classes.headerButton}>
              {!isExpand ? <Button onClick={onShowBalance}>
                {isEyeOff ? <VisibilityOff /> : <Visibility />}
              </Button> : null}
              <Button onClick={onExpandCard}>
                <CallReceived className={_clsx(classes.arrowIcon, { [classes.rotate]: isExpand })} />
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12} align="center">
                  <Typography variant="subtitle1">{cardData.title}</Typography>
                </Grid>
                <Grid item xs={12} align="center">
                  <Chip label={cardData.chip} className={classes.chip} />
                </Grid>
                {isEyeOff ? <Grid item xs={12} align="center">
                  <Typography variant="h5">***</Typography>
                  <Typography variant="subtitle2">***</Typography>
                </Grid> : <Grid item xs={12} align="center">
                  <Typography variant="h5">{cardData.amount}</Typography>
                  <Typography variant="subtitle2">{cardData.exchange}</Typography>
                </Grid>}
                <Grid item xs={12} className={classes.buttonBalance}>
                  <Button onClick={onDeposit} variant="outlined">Deposit</Button>
                  <Button onClick={onWithdraw} variant="outlined">Withdraw</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
}

CardBalance.propsType = {
  cardData: TypeProps.object,
  onClickDeposit: TypeProps.func,
  onClickWithdraw: TypeProps.func
}

CardBalance.defaultProps = {
  cardData: {
    title: 'Total Balance',
    color: '#FF9F38',
    amount: '0.16231428',
    exchange: '3,700.96 USD',
    chip: 'BTC'
  },
  onClickDeposit: () => { },
  onClickWithdraw: () => { }
}

export default CardBalance;