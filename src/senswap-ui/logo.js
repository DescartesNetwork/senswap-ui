import React from 'react';
import PropTypes from 'prop-types';

import MuiAvatar from '@material-ui/core/Avatar';

import { makeStyles } from './styles';

// Theme dependence
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  tiny: {
    width: '24px',
    height: '24px',
  },
  small: {
    width: '32px',
    height: '32px',
  },
  medium: {
    width: '40px',
    height: '40px',
  },
  default: {
    width: '48px',
    height: '48px',
  },
  large: {
    width: '60px',
    height: '60px',
  },
}));

function Logo(props) {
  const styleClasses = useStyles();
  const { alt, src, variant, classes } = props;

  return <MuiAvatar alt={alt} src={src}
    variant={variant}
    className={classes ? styleClasses[classes] : styleClasses.default}
  />
}

Logo.defaultProps = {
  src: '',
  variant: 'circular',
}

Logo.propTypes = {
  src: PropTypes.string,
  variant: PropTypes.string,
}

export default Logo