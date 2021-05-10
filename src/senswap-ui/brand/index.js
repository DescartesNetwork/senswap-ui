import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import Image from 'material-ui-image';

import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';
import CircularProgress from 'senswap-ui/circularProgress';

import useStyles from './styles';
import SEN_LOGO from './logo.svg';


const Brand = forwardRef((props, ref) => {
  const classes = useStyles();
  const { subtitle } = props;

  const onHome = () => {
    window.location.href = window.location.origin;
  }

  return <Grid ref={ref} container spacing={1} alignItems="center" className={classes.noWrap}>
    <Grid item className={classes.logo} onClick={onHome}>
      <Image
        src={SEN_LOGO}
        color="#00000000"
        loading={<CircularProgress size={17} />}
      />
    </Grid>
    <Grid item className={classes.cursor} onClick={onHome}>
      {subtitle ? <Typography className={classes.subtitle}>{subtitle}</Typography> : null}
      <Typography>SenSwap</Typography>
    </Grid>
  </Grid>
});

Brand.defaultProps = {
  subtitle: '',
}

Brand.propTypes = {
  subtitle: PropTypes.string,
}

export default Brand;