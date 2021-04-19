import React from 'react';
import PropTypes from 'prop-types';

import MuiCheckbox from '@material-ui/core/Checkbox';
import { StarOutlineRounded, StarRounded } from '@material-ui/icons';

import Grid from 'senswap-ui/grid';

import useStyles from './styles';


function Checkbox(props) {
  const classes = useStyles();
  const { checked, onChange } = props;

  const onChecked = (e) => {
    const checked = e.target.checked;
    return onChange(checked);
  }

  return <Grid container>
    <Grid>
      <MuiCheckbox
        className={classes.img}
        icon={<StarOutlineRounded />}
        checkedIcon={<StarRounded color="primary" />}
        checked={checked}
        onChange={onChecked}
      />
    </Grid>
  </Grid>
}

Checkbox.defaultProps = {
  checked: false,
  onChange: () => { }
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func
}

export default Checkbox;