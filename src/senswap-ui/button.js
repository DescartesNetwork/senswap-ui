import React, { forwardRef } from 'react';
import MuiButton from '@material-ui/core/Button';

const Button = forwardRef((props, ref) => {
  return <MuiButton {...props} ref={ref} />
});

export default Button;