import React, { forwardRef } from 'react';


import { makeStyles } from 'senswap-ui/styles';
import Grid from 'senswap-ui/grid';

import InputBase from '@material-ui/core/InputBase';
import MuiTextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  noWrap: {
    flexWrap: 'nowrap',
  },
  stretch: {
    flex: '1 1 auto',
  },
  paper: {
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius / 2,
    backgroundColor: theme.palette.background.secondary
  },
}));


const TextFieldContained = forwardRef((props, ref) => {
  const classes = useStyles();
  const {
    label, InputProps,
    error, helperText, helperTextPrimary, helperTextSecondary,
    ...others } = props;
  const { startAdornment, endAdornment } = InputProps || {}

  const renderPrimaryText = () => {
    if (error) return <Grid item xs={6}>
      <Typography variant="body2" color="error">{error}</Typography>
    </Grid>
    if (helperText) return <Grid item xs={6}>
      <Typography variant="body2">{helperText}</Typography>
    </Grid>
    if (helperTextPrimary) return <Grid item xs={6}>
      <Typography variant="body2">{helperTextPrimary}</Typography>
    </Grid>
    return null;
  }

  const renderSecondaryText = () => {
    if (helperTextSecondary) return <Grid item xs={(error || helperText || helperTextPrimary) ? 6 : 12}>
      <Typography variant="body2" align="right">{helperTextSecondary}</Typography>
    </Grid>
    return null;
  }

  return <Grid container spacing={1}>
    {label ? <Grid item xs={12}>
      <Typography variant="body2"><strong>{label}</strong></Typography>
    </Grid> : null}
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <Grid container className={classes.noWrap}>
          {startAdornment ? <Grid item>{startAdornment}</Grid> : null}
          <Grid item className={classes.stretch}>
            <InputBase {...others} ref={ref} fullWidth />
          </Grid>
          {endAdornment ? <Grid item>{endAdornment}</Grid> : null}
        </Grid>
      </Paper>
    </Grid>
    {renderPrimaryText()}
    {renderSecondaryText()}
  </Grid >
});

const TextField = forwardRef((props, ref) => {
  const { variant, ...others } = props;
  if (variant === 'contained') return <TextFieldContained {...others} ref={ref} />
  return <MuiTextField variant={variant} {...others} ref={ref} />
});

export default TextField;