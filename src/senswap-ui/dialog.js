import React, { forwardRef } from 'react';

import MuiDialog from '@material-ui/core/Dialog';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogContentText from '@material-ui/core/DialogContentText';
import MuiDialogTitle from '@material-ui/core/DialogTitle';

const Dialog = (props) => <MuiDialog {...props} />

export default Dialog;

export const DialogActions = (props) => <MuiDialogActions {...props} />
export const DialogContent = (props) => <MuiDialogContent {...props} />
export const DialogContentText = (props) => <MuiDialogContentText {...props} />
export const DialogTitle = (props) => <MuiDialogTitle {...props} />