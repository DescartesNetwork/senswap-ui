import React, { forwardRef } from 'react';

import MuiTypography from '@material-ui/core/Typography';

const Typography = forwardRef((props, ref) => {
  return <MuiTypography ref={ref} {...props} />
});

export default Typography;