import React, { forwardRef } from 'react';

import MuiPaper from '@material-ui/core/Paper';

const Paper = forwardRef((props, ref) => {
  return <MuiPaper {...props} ref={ref} />
});

export default Paper;