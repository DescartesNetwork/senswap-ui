import React, { forwardRef } from 'react';

import MuiChip from '@material-ui/core/Chip';


const Chip = forwardRef((props, ref) => {
  return <MuiChip {...props} ref={ref} />
});

export default Chip;