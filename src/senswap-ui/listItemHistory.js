import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';

import Grid from 'senswap-ui/grid';
import Drain from 'senswap-ui/drain';
import Typography from 'senswap-ui/typography';
import List from 'senswap-ui/list';
import ListItem from 'senswap-ui/listItem';
import ListItemText from 'senswap-ui/listItemText';
import ListItemIcon from 'senswap-ui/listItemIcon';
import { DepositIcon, WithdrawIcon } from 'senswap-ui/supplementIcons';

import { makeStyles } from './styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  Complete: {
    color: '#4FBF67',
  },
  Pending: {
    color: '#ffae1a',
  },
  Cancel: {
    color: '#ff6060',
  }
}));

const ACTION = {
  withdraw: 'Withdraw',
  deposit: 'Deposit',
}

const dateFormat = { year: 'numeric', month: 'short', day: 'numeric' };

const ListItemHistory = props => {
  const classes = useStyles();
  const { variant, status, amount, units, ...others } = props;
  const date = props?.date === 0 ? Date.now() : props.date;

  return <List className={classes.root}>
    <ListItem alignItems="flex-start" {...others} button>
      <ListItemIcon>
        {variant === 'deposit' ? <DepositIcon /> : <WithdrawIcon />}
      </ListItemIcon>
      <ListItemText disableTypography
        primary={
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography>{ACTION[variant]}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography align="right">{new Date(date).toLocaleString("en-US", dateFormat)}</Typography>
            </Grid>
          </Grid>
        }
        secondary={
          <Grid item xs={12}>
            <Typography className={classes[status]}>{status}</Typography>
            <Drain size={2} />
            <Typography color="textPrimary">{amount} {units}</Typography>
          </Grid>
        }
      />
    </ListItem>
    <Divider variant="inset" component="li" />
  </List>
}

ListItemHistory.defaultProps = {
  variant: '',
  status: '',
  date: Date.now(),
  amount: 0.0,
  units: '',
}

ListItemHistory.propTypes = {
  variant: PropTypes.oneOf(Object.keys(ACTION)),
  status: PropTypes.string, // PropTypes.oneOf(['Complete', 'Pending', 'Cancel'])
  date: PropTypes.number,
  amount: PropTypes.number,
  units: PropTypes.string,
}

export default ListItemHistory;