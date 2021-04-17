import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Image from 'material-ui-image';
import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from './styles';
import SEN_LOGO from 'static/images/sen-logo.svg';

function Brand(props) {
  const classes = useStyles();
  const { subtitle } = props;

  const onHome = () => {
    window.location.href = window.location.origin;
  }

  return <Grid container spacing={2}>
    <Grid item className={classes.logo}>
      <Link color="textPrimary" underline="none" onClick={onHome}>
        <Grid container spacing={1} alignItems="center" className={classes.noWrap}>
          <Grid item style={{ width: 40 }}>
            <Image
              src={SEN_LOGO}
              color="#00000000"
              loading={<CircularProgress size={17} />}
            />
          </Grid>
          <Grid item>
            {subtitle ? <Typography className={classes.subtitle}>{subtitle}</Typography> : null}
            <Typography variant="h5" noWrap>SenSwap</Typography>
          </Grid>
        </Grid>
      </Link>
    </Grid>
  </Grid>
}

Brand.defaultProps = {
  subtitle: '',
}

Brand.propTypes = {
  subtitle: PropTypes.string,
}

export default Brand;