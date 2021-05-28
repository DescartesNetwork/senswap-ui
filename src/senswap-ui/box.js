import React from 'react';

import MuiBox from '@material-ui/core/Box';

function Box(props) {
  const { ...others } = props;
  return <MuiBox {...others} />
}

export default Box;