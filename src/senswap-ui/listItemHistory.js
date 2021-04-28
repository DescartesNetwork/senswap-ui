import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';

import Grid from 'senswap-ui/grid';
import Drain from 'senswap-ui/drain';
import Typography from 'senswap-ui/typography';
import List, { ListItem, ListItemIcon, ListItemText } from 'senswap-ui/list';

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
  // const date = props?.date === 0 ? Date.now() : props.date;

  return <List className={classes.root}>
    <ListItem alignItems="flex-start" {...others}>
      {/*** TODO ***/}
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