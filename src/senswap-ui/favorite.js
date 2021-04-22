import React from 'react';
import PropTypes from 'prop-types';

import MuiCheckbox from '@material-ui/core/Checkbox';
import { StarOutlineRounded, StarRounded } from '@material-ui/icons';

import { makeStyles } from './styles';

// Theme independence
const useStyles = makeStyles({
  root: {
    '& span': {
      color: props => props.color
    }
  }
});

function Favorite(props) {
  const { checked, onChange } = props;
  const { root } = useStyles(props);
  const onChecked = e => onChange(e.target.checked);

  return <MuiCheckbox
    icon={<StarOutlineRounded />}
    checkedIcon={<StarRounded />}
    checked={checked}
    onChange={onChecked}
    className={root}
  />
}

Favorite.defaultProps = {
  checked: false,
  onChange: () => { },
  color: '#ed423b',
}

Favorite.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  color: PropTypes.string,
}

export default Favorite;