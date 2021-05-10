import React from 'react';
import PropTypes from 'prop-types';

import MuiCheckbox from '@material-ui/core/Checkbox';

import { StarOutlineRounded, StarRounded } from './icons';


function Favorite(props) {
  const { checked, onChange, color, classes: userClasses, ...others } = props;
  const onChecked = e => onChange(e.target.checked);

  // Icon color props accept hex color whereas checkbox
  // does not, so we have to check which kind of color
  // is passed into favorite
  let iconStyle = undefined;
  const style = { color: color };
  color?.startsWith('#') ? iconStyle = { style } : iconStyle = style;

  return <MuiCheckbox
    icon={<StarOutlineRounded />}
    checkedIcon={<StarRounded {...iconStyle} />}
    checked={checked}
    onChange={onChecked}
    classes={userClasses}
    {...others}
  />
}

Favorite.defaultProps = {
  checked: false,
  onChange: () => { },
  color: '#FBD40B',
}

Favorite.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  color: PropTypes.string,
}

export default Favorite;