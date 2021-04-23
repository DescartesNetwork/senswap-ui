import React from 'react';
import Card from '@material-ui/core/Card';

import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';

import useStyle from './styles';

function CardBalance(props) {
  const classes = useStyle();

  return <Grid container spacing={0}>
    <Grid item>
      <Card className={classes.card}>
        <Typography>Card Balance</Typography>
      </Card>
    </Grid>
  </Grid>
}

export default CardBalance;