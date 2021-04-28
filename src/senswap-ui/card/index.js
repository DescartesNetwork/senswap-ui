import React, { forwardRef } from 'react';

import MuiCard from '@material-ui/core/Card';
import MuiCardActionArea from '@material-ui/core/CardActionArea';
import MuiCardActions from '@material-ui/core/CardActions';
import MuiCardContent from '@material-ui/core/CardContent';
import MuiCardHeader from '@material-ui/core/CardHeader';
import MuiCardMedia from '@material-ui/core/CardMedia';

import CardPool from 'senswap-ui/card/CardPool';
import CardBalance from 'senswap-ui/card/CardBalance';

const Card = forwardRef((props, ref) => {
  return <MuiCard {...props} ref={ref} />
});

export default Card;

export const CardActionArea = forwardRef((props, ref) => {
  return <MuiCardActionArea {...props} ref={ref} />
});

export const CardActions = forwardRef((props, ref) => {
  return <MuiCardActions {...props} ref={ref} />
});

export const CardContent = forwardRef((props, ref) => {
  return <MuiCardContent {...props} ref={ref} />
});

export const CardHeader = forwardRef((props, ref) => {
  return <MuiCardHeader {...props} ref={ref} />
});

export const CardMedia = forwardRef((props, ref) => {
  return <MuiCardMedia {...props} ref={ref} />
});

export { CardPool, CardBalance }