import React, { forwardRef } from 'react';
import MuiIconButton from '@material-ui/core/IconButton';

const IconButton = forwardRef((props, ref) => {
  return <MuiIconButton {...props} ref={ref} />
});

export default IconButton;