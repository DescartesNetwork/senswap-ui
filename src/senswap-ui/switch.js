import React, { forwardRef } from 'react';
import PropType from 'prop-types';

import MuiSwitch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core';

import Grid from 'senswap-ui/grid';

const useStyles = makeStyles(theme => ({
  root: {
    width: 28,
    height: 16,
    padding: theme.spacing(0),
  },
  switchBase: {
    padding: `${theme.spacing(0.5) - 1}px`,
    '&$checked': {
      transform: 'translateX(12px)',
      color: theme.palette.background.primary,
      '& + $track': {
        background: theme.palette.background.secondary,
        opacity: 1,
        border: 'none',
      },
    },
    '&:hover': {
      background: 'unset',
    },
  },
  thumb: {
    width: 10,
    height: 10,
  },
  track: {
    transition: theme.transitions.create(),
  },
  checked: {},
}));

const SwitchContained = forwardRef((props, ref) => {
  const classes = useStyles();
  const {size,...others} = props;
  const defaultClass = {...classes};

  return <Grid container spacing={0}>
      <Grid item xs={12}>
        <MuiSwitch classes={defaultClass} {...others} inputRef={ref}/>
      </Grid>
  </Grid>
});

const Switch = forwardRef((props,ref) => {
  const {variant, ...others} = props;
  
  if(variant==='contained') return <SwitchContained {...others} ref={ref}/>
  return <MuiSwitch {...others} ref={ref}/>
});

Switch.propTypes = {
  variant: PropType.string
}
Switch.defaultProps = {
  variant: '',
}

export default Switch;