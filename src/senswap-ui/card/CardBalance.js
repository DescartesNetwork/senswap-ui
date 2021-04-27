import React, { useState } from 'react';
import { Button, Card, CardContent } from '@material-ui/core';
import { Visibility, VisibilityOff, CallReceived } from '@material-ui/icons';
import _clsx from 'clsx';
import TypeProps from 'prop-types';

import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';
import Badge from 'senswap-ui/badge';

import useStyle from './styles';

function CardBalance(props) {
  const classes = useStyle();

  const { cardData, onClickDeposit, onClickWithdraw } = props;

  const [isEyeOff, setEyeOff] = useState(false);
  const [isExpand, setExpand] = useState(false);

  function handleShowBalance() {
    const res = !isEyeOff;
    setEyeOff(res);
  }
  function handleExpandCard() {
    const res = !isExpand;
    setExpand(res);
  }
  function handleDeposit() {
    onClickDeposit();
  }
  function handleWithdraw() {
    onClickWithdraw();
  }

  return <Grid container spacing={0}>
    <Grid item xs={12}>
      <Card className={_clsx(classes.card,{[classes.cardExpand]: isExpand})}>
        <CardContent className={classes.cardBalanceContent}>
          <Grid container>
            <Grid item xs={12} align="right" className={classes.headerButton}>
              {!isExpand ?
                <Button onClick={handleShowBalance}>
                  {isEyeOff ? <VisibilityOff /> : <Visibility />}
                </Button>
              : null}
              <Button onClick={handleExpandCard}>
                <CallReceived className={_clsx(classes.arrowIcon,{[classes.rotate]: isExpand})}/>
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12} align="center">
                  <Typography variant="subtitle1">{ cardData.title }</Typography>
                </Grid>
                <Grid item xs={12} align="center" className={classes.badge}>
                  <Badge cuscolor={cardData.color} badgeContent={ cardData.badge } />
                </Grid>
                {isEyeOff ?
                  <Grid item xs={12} align="center">
                    <Typography variant="h5">**********</Typography>
                    <Typography variant="subtitle2">*********</Typography>
                  </Grid>
                  :
                  <Grid item xs={12} align="center">
                    <Typography variant="h5">{ cardData.amount }</Typography>
                    <Typography variant="subtitle2">{ cardData.exchange }</Typography>
                  </Grid>
                }
                <Grid item xs={12} className={classes.buttonBalance}>
                  <Button onClick={ handleDeposit } variant="outlined">Deposit</Button>
                  <Button onClick={ handleWithdraw } variant="outlined">Withdraw</Button>
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
    badge: 'BTC'
  },
  onClickDeposit: () => {},
  onClickWithdraw: () => {}
}

export default CardBalance;