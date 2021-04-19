
import React from 'react';
import PropTypes from 'prop-types';

import MuiCheckbox from '@material-ui/core/Checkbox';
import { StarOutlineRounded, StarRounded } from '@material-ui/icons';

import Grid from 'senswap-ui/grid';


function Favorite(props) {

  const { checked, onChange } = props;

  const onChecked = e => onChange(e.target.checked);

  return <Grid container>
    <Grid>
      <MuiCheckbox
        icon={<StarOutlineRounded />}
        checkedIcon={<StarRounded color='primary' />}
        checked={checked}
        onChange={onChecked}
      />
    </Grid>
  </Grid>
}

Favorite.defaultProps = {
  checked: false,
  onChange: () => { }
}

Favorite.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func
}

export default Favorite;
