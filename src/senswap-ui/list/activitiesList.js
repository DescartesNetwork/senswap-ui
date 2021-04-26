import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import { makeStyles } from '../styles';

import LatestActivity from './latestActivity';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  viewAll: {
    color: '#FF3122',
  }
}));

const ActivitiesList = (props) => {
  const classes = useStyles();
  const { data } = props;

  if (data.length > 5) {
    return <List className={classes.root}>
      {data.slice(0, 5).map( value => <LatestActivity key={value.id} {...value}/> )}
      <ListItem button>
        <ListItemAvatar>
          <ArrowForwardIcon fontSize="large" />
        </ListItemAvatar>
        <ListItemText className={classes.viewAll} primary="View all activities" />
      </ListItem>
    </List>
  }

  return <List className={classes.root}>
      {data.map( value => <LatestActivity key={value.id} {...value}/> )}
  </List >
}

ActivitiesList.defaultProps = {
  data: [],
}

ActivitiesList.propTypes = {
  data: PropTypes.array,
}

export default ActivitiesList