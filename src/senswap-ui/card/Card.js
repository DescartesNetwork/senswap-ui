import React from 'react';
import Proptype from 'prop-types';
import { Card, CardActionArea, CardContent } from '@material-ui/core';
import { Link } from '@material-ui/core';

import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';
import Avatar from 'senswap-ui/avatar';


import useStyles from './styles';

function MuiCard(props) {
  const classes = useStyles();
  const { size, customSize, src, variant, subtitle, cardData, onClickCardDetails, button } = props;

  function handleClick() {
   return onClickCardDetails(cardData);
  }
  return <Grid container spacing={2}>
    <Grid item xs={12}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Grid container>
            <Grid item xs={12}>
              <Avatar src={src} size={size} customSize={customSize} variant={variant} subtitle={subtitle} />
            </Grid>
          </Grid>
        </CardContent>
        <CardContent className={classes.cardContent}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Typography variant="h5">{cardData.earned}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>{cardData.description}</Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActionArea classes={{root: classes.cardAction, focusHighlight: classes.focusHighlight}} className={classes.cardAction}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Grid container spacing={0}>
                <Grid item xs={6}>
                  <Typography>APR:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography align="right">{cardData.apr}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={0}>
                <Grid item xs={6}>
                  <Typography>Your stake:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography align="right">{cardData.stake}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={0} className={classes.buttonDetails}>
            <Grid item>
              <Link href="#" onClick={handleClick}>
              <Typography>{button}</Typography>
              </Link>
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
    </Grid>
  </Grid>
}

MuiCard.propsType = {
  size: Proptype.string,
  customSize: Proptype.object,
  src: Proptype.string,
  variant: Proptype.string,
  subtitle: Proptype.string,
  cardData: Proptype.object,
  onClickCardDetails: Proptype.func,
  button: Proptype.string,
}
MuiCard.defaultProps = {
  size: 'medium',
  customSize: {},
  src: '',
  variant: 'circular',
  subtitle: 'Header default',
  cardData: {
    earned: '0.0000',
    apr: '127.90%',
    stake: '0.0000',
    description: 'Bitcoin earned',
  },
  button: 'Details',
  onClickCardDetails: (e) => {},
}

export default MuiCard;