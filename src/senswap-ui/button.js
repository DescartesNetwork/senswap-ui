import React, { forwardRef } from 'react';

import MuiIconButton from '@material-ui/core/IconButton';
import MuiButton from '@material-ui/core/Button';

const Button = forwardRef((props, ref) => {
  return <MuiButton {...props} ref={ref} />
});

export default Button;

export const IconButton = forwardRef((props, ref) => {
  return <MuiIconButton {...props} ref={ref} />
});