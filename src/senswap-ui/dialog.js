import React from 'react';

import { makeStyles } from '@material-ui/styles';
import MuiDialog from '@material-ui/core/Dialog';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogContentText from '@material-ui/core/DialogContentText';
import MuiDialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles(theme => ({
  dialog: {
    borderRadius: theme.shape.borderRadius * 2
  }
}));

const Dialog = (props) => {
  const classes = useStyles();
  const { classes: userClasses, ...others } = props;
  const combinedClasses = { paper: classes.dialog, ...(userClasses || {}) }

  return <MuiDialog classes={combinedClasses} {...others} />
}

export default Dialog;

export const DialogActions = (props) => <MuiDialogActions {...props} />
export const DialogContent = (props) => <MuiDialogContent {...props} />
export const DialogContentText = (props) => <MuiDialogContentText {...props} />
export const DialogTitle = (props) => <MuiDialogTitle {...props} />