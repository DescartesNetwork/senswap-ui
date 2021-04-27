import React, { forwardRef } from 'react';

import MuiList from '@material-ui/core/List';
import MuiListItem from '@material-ui/core/ListItem';
import MuiListItemAvatar from '@material-ui/core/ListItemAvatar';
import MuiListItemIcon from '@material-ui/core/ListItemIcon';
import MuiListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import MuiListItemText from '@material-ui/core/ListItemText';
import MuiListSubheader from '@material-ui/core/ListSubheader';

const List = forwardRef((props, ref) => {
  return <MuiList {...props} ref={ref} />
});

const ListItem = forwardRef((props, ref) => {
  return <MuiListItem {...props} ref={ref} />
});

const ListItemAvatar = forwardRef((props, ref) => {
  return <MuiListItemAvatar {...props} ref={ref} />
});

const ListItemIcon = forwardRef((props, ref) => {
  return <MuiListItemIcon {...props} ref={ref} />
});

const ListItemSecondaryAction = forwardRef((props, ref) => {
  return <MuiListItemSecondaryAction {...props} ref={ref} />
});

const ListItemText = forwardRef((props, ref) => {
  return <MuiListItemText {...props} ref={ref} />
});

const ListSubheader = forwardRef((props, ref) => {
  return <MuiListSubheader {...props} ref={ref} />
});


export default List;
export {
  ListItem, ListItemAvatar, ListItemIcon,
  ListItemSecondaryAction, ListItemText, ListSubheader
}