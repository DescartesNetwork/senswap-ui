import React, { forwardRef } from 'react';

import MuiBadge from '@material-ui/core/Badge';

const Badge = forwardRef((props, ref) => {
  return <MuiBadge {...props} ref={ref} />
});

export default Badge;