import React from 'react';
import PropTypes from 'prop-types';

import Divider from 'senswap-ui/divider';
import Grid from 'senswap-ui/grid';
import Drain from 'senswap-ui/drain';
import Typography from 'senswap-ui/typography';
import List, { ListItem, ListItemIcon, ListItemText } from 'senswap-ui/list';
import SvgIcon from '@material-ui/core/SvgIcon';

import { makeStyles } from './styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.default,
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

// SVG icon for Deposit
const DepositIcon = () => {
  return (<SvgIcon style={{ fontSize: 40 }}
    width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="20" cy="20" r="20" fill="#6C5DD3" />
    <rect x="12.5" y="16.5" width="15" height="11" rx="1" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="20" cy="22" r="2.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.5 14.5H25.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16.5 12.5H23.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
  </SvgIcon>);
}

// SVG icon for Withdraw
const WithdrawIcon = () => {
  return (<SvgIcon style={{ fontSize: 40 }}
    width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="20" cy="20" r="20" fill="#4FBF67" />
    <path d="M22 16.5L24.5 12.5H15.5L18 16.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
    <path fillRule="evenodd" clipRule="evenodd" d="M22 16.5H18C18 16.5 13.5 19.722 13.5 23.056C13.5 25.278 15.125 27.5 20 27.5C24.875 27.5 26.5 25.278 26.5 23.056C26.5 19.722 22 16.5 22 16.5Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
  </SvgIcon>);
}

const ACTION = {
  deposit: {
    name: 'Deposit',
    icon: DepositIcon,
  },
  withdraw: {
    name: 'Withdraw',
    icon: WithdrawIcon,
  },
}

const dateFormat = { year: 'numeric', month: 'short', day: 'numeric' };

const ListItemHistory = props => {
  const classes = useStyles();
  const { variant, status, amount, units, classes: userClasses, ...others } = props;
  const date = props?.date === 0 ? Date.now() : props.date;
  const defaultClasses = { root: classes.root, ...userClasses };

  return <List className={defaultClasses.root} >
    <ListItem alignItems="flex-start" {...others} >
      <ListItemIcon>
        {ACTION[variant].icon()}
      </ListItemIcon>
      <ListItemText disableTypography
        primary={
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography>{ACTION[variant].name}</Typography>
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