import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardActionArea, CardContent } from '@material-ui/core';

import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';
import Avatar from 'senswap-ui/avatar';


import useStyles from './styles';

function MuiCard(props) {
  const classes = useStyles();
  const { size, src, variant, subtitle, cardData, onClickCardDetails, button } = props;

  function handleClick() {
    return onClickCardDetails(cardData);
  }
  return <Grid container spacing={2}>
    <Grid item xs={12}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Grid container>
            <Grid item xs={12}>
              <Grid container spacing={0} alignItems="center">
                <Grid item>
                  <Avatar src={src} size={size} variant={variant} />
                </Grid>
                <Grid item className={classes.title}>
                  <Typography>{subtitle}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <CardContent className={classes.cardContent}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Typography variant="h4">{cardData.earned}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>{cardData.description}</Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActionArea classes={{ root: classes.cardAction, focusHighlight: classes.focusHighlight }} className={classes.cardAction}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Grid container spacing={0}>
                <Grid item xs={6}>
                  <Typography variant="body2">APR:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography align="right" variant="body2">{cardData.apr}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={0}>
                <Grid item xs={6}>
                  <Typography variant="body2">Your stake:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography align="right" variant="body2">{cardData.stake}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={0} className={classes.buttonDetails}>
            <Grid item>
              <Grid container alignItems="center" justify="center" onClick={handleClick} spacing={0}>
                <Typography>{button}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
    </Grid>
  </Grid>
}

MuiCard.propsType = {
  size: PropTypes.string,
  src: PropTypes.string,
  variant: PropTypes.string,
  subtitle: PropTypes.string,
  cardData: PropTypes.object,
  onClickCardDetails: PropTypes.func,
  button: PropTypes.string,
}

MuiCard.defaultProps = {
  size: 'medium',
  src: '',
  variant: 'circular',
  subtitle: 'Header default',
  cardData: {
    earned: '0.0000',
    apr: '127.90%',
    stake: '0.0000',
    description: 'Bitcoin earned',
  },
  button: 'See details',
  onClickCardDetails: (e) => { },
}

export default MuiCard;