import PropTypes from 'prop-types';

import SvgIcon from '@material-ui/core/SvgIcon';


function DepositIcon(props) {
  const { style, ...others } = props;

  return (
    <SvgIcon style={style} {...others}
      width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="20" fill="#6C5DD3" />
      <rect x="12.5" y="16.5" width="15" height="11" rx="1" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
      <circle cx="20" cy="22" r="2.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M14.5 14.5H25.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M16.5 12.5H23.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
    </SvgIcon>
  );
}

DepositIcon.defaultProps = {
  style: { fontSize: 40 },
}

DepositIcon.propTypes = {
  style: PropTypes.object,
}

export default DepositIcon