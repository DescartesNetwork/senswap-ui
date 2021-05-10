import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import MuiChip from '@material-ui/core/Chip';


const defaultColor = ['default', 'primary', 'secondary'];

const Chip = forwardRef((props, ref) => {
  const { color, style, ...others } = props;
  const combinedStyle = defaultColor.includes(color) ? { color, style } : { style: { backgroundColor: color, ...style } }
  return <MuiChip {...combinedStyle} {...others} ref={ref} />
});

Chip.defaultProps = {
  color: 'default',
}
Chip.propTypes = {
  color: PropTypes.string,
}

export default Chip;