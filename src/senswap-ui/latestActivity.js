import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import Grid from 'senswap-ui/grid';
import Drain from 'senswap-ui/drain';
import Typography from 'senswap-ui/typography';
import WITHDRAW_LOGO from '../static/images/withdraw.svg';
import DEPOSIT_LOGO from '../static/images/deposit.svg';

import Logo from './logo';
import { makeStyles } from './styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  complete: {
    color: '#4FBF67',
  },
  inProgress: {
    color: '#ffae1a',
  }
}));

const ACTION = {
  withdraw: { msg: 'Withdraw', logo: WITHDRAW_LOGO },
  deposit: { msg: 'Deposit', logo: DEPOSIT_LOGO },
}

const STATUS_MSG = {
  complete: 'Complete',
  inProgress: 'In progress',
}

const dateFormat = { year: 'numeric', month: 'short', day: 'numeric' };

const LatestActivity = props => {
  const classes = useStyles();
  const { action, status, amount, coinUnit, date } = props;

  return <List className={classes.root}>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Logo logoSize="medium" src={ACTION[action].logo} />
      </ListItemAvatar>
      <ListItemText disableTypography
        primary={
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography>{ACTION[action].msg}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography align="right">{date}</Typography>
            </Grid>
          </Grid>
        }
        secondary={
          <Grid item xs={12}>
            <Typography className={classes[status]}>{STATUS_MSG[status]}</Typography>
            <Drain size={2} />
            <Typography color="textPrimary">{amount} {coinUnit}</Typography>
          </Grid>
        }
      />
    </ListItem>
    <Divider variant="inset" component="li" />
  </List>
}

LatestActivity.defaultProps = {
  action: '',
  status: '',
  amount: 0.0,
  coinUnit: '',
  date: new Date().toLocaleString("en-US", dateFormat),
}

LatestActivity.propTypes = {
  action: PropTypes.oneOf(Object.keys(ACTION)),
  status: PropTypes.oneOf(Object.keys(STATUS_MSG)),
  amount: PropTypes.number,
  coinUnit: PropTypes.string,
  date: PropTypes.string,
}

export default LatestActivity;