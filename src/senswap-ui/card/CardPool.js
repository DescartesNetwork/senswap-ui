import React from 'react';
import PropTypes from 'prop-types';

import Grid from 'senswap-ui/grid';
import Card, { CardActionArea, CardContent } from 'senswap-ui/card';
import Typography from 'senswap-ui/typography';
import Avatar from 'senswap-ui/avatar';
import Divider from 'senswap-ui/divider';

import useStyles from './styles';


function CardPool(props) {
  const classes = useStyles();
  const { icon, name, symbol, earning, apr, stake, onClick } = props;

  return <Card className={classes.card}>
    <CardContent className={classes.cardContent}>
      <Grid container alignItems="center" className={classes.noWrap}>
        <Grid item>
          <Avatar size="medium" src={icon} />
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">{name}</Typography>
        </Grid>
      </Grid>
    </CardContent>
    <Divider />
    <CardContent className={classes.cardContent}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Typography variant="h4">{earning}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2">{symbol} earned</Typography>
        </Grid>
      </Grid>
    </CardContent>
    <CardActionArea className={classes.cardAction}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Typography variant="body2">APR:</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography align="right" variant="body2"><strong>{apr}%</strong></Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2">Your stake:</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography align="right" variant="body2"><strong>{stake}</strong></Typography>
        </Grid>
        <Grid item xs={12} className={classes.activeAction}>
          <Grid container direction="column" justify="center" alignItems="center" >
            <Grid item onClick={onClick}>
              <Typography><strong>See details</strong></Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CardActionArea>
  </Card>
}

CardPool.defaultProps = {
  name: '',
  symbol: '',
  icon: '',
  earning: 0,
  apr: 0,
  stake: 0,
  onClick: () => { },
}

CardPool.propsType = {
  name: PropTypes.string,
  symbol: PropTypes.string,
  icon: PropTypes.string,
  earning: PropTypes.number,
  apr: PropTypes.number,
  stake: PropTypes.number,
  onClick: PropTypes.func,
}

export default CardPool;