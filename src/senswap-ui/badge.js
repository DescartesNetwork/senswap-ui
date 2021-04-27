import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import MuiBadge from '@material-ui/core/Badge';

const useStyles = makeStyles({
  root: {
    '& span': {
      backgroundColor: props => props.cuscolor,
      padding: '4px 10px',
      position: 'unset',
      transform: 'unset'
    }
  }
});

function Badge(props) {
  const { root } = useStyles(props);
  const {...others} = props;
  return <MuiBadge {...others} className={ root } />
}

Badge.defaultProps = {
  cuscolor: '#dadada',
}

Badge.propTypes = {
  cuscolor: PropTypes.string
}

export default Badge;