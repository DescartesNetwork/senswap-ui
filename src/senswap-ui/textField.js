import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from 'senswap-ui/styles';
import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';

import InputBase from '@material-ui/core/InputBase';
import MuiTextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

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
  number: {
    '& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button': {
      WebkitAppearance: 'none',
    }
  }
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
      {typeof helperTextPrimary === 'object' ? helperTextPrimary : <Typography variant="body2">{helperTextPrimary}</Typography>}
    </Grid>
    return null;
  }

  const renderSecondaryText = () => {
    if (helperTextSecondary) return <Grid item xs={(error || helperText || helperTextPrimary) ? 6 : 12}>
      {typeof helperTextSecondary === 'object' ? helperTextSecondary : <Typography variant="body2" align="right">{helperTextSecondary}</Typography>}
    </Grid>
    return null;
  }

  return <Grid container spacing={1}>
    {label ? <Grid item xs={12}>
      <Typography variant="body2"><strong>{label}</strong></Typography>
    </Grid> : null}
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <Grid container className={classes.noWrap} alignItems="center">
          {startAdornment ? <Grid item>{startAdornment}</Grid> : null}
          <Grid item className={classes.stretch}>
            <InputBase className={classes[others.type]} {...others} ref={ref} fullWidth />
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

TextField.propTypes = {
  helperTextPrimary: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  helperTextSecondary: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

export default TextField;