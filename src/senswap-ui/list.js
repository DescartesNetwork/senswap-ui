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
})

export default List;

export const ListItem = forwardRef((props, ref) => {
  return <MuiListItem {...props} ref={ref} />
})

export const ListItemAvatar = forwardRef((props, ref) => {
  return <MuiListItemAvatar {...props} ref={ref} />
})

export const ListItemIcon = forwardRef((props, ref) => {
  return <MuiListItemIcon {...props} ref={ref} />
})

export const ListItemSecondaryAction = forwardRef((props, ref) => {
  return <MuiListItemSecondaryAction {...props} ref={ref} />
})

export const ListItemText = forwardRef((props, ref) => {
  return <MuiListItemText {...props} ref={ref} />
})

export const ListSubheader = forwardRef((props, ref) => {
  return <MuiListSubheader {...props} ref={ref} />
})