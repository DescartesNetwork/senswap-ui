import React from 'react';
import PropTypes from 'prop-types';

import MuiCheckbox from '@material-ui/core/Checkbox';

import { StarOutlineRounded, StarRounded } from './icons';


function Favorite(props) {
  const { checked, onChange } = props;
  const onChecked = e => onChange(e.target.checked);

  return <MuiCheckbox
    icon={<StarOutlineRounded />}
    checkedIcon={<StarRounded style={{ color: '#FBD40B' }}/>}
    checked={checked}
    onChange={onChecked}
  />
}

Favorite.defaultProps = {
  checked: false,
  onChange: () => { },
}

Favorite.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
}

export default Favorite;