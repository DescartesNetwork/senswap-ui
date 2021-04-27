import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import MuiChip from '@material-ui/core/Chip';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'unset',
    '& span': {
      backgroundColor: props => props.cuscolor,
      padding: '4px 10px',
      position: 'unset',
      transform: 'unset',
      borderRadius: '13.5px',
    }
  }
});

function Chip(props) {
  const { root } = useStyles(props);
  const {...others} = props;
  return <MuiChip {...others} className={ root } />
}

Chip.defaultProps = {
  cuscolor: '#dadada',
}

Chip.propTypes = {
  cuscolor: PropTypes.string
}

export default Chip;