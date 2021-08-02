import PropTypes from 'prop-types';

import SvgIcon from './svgIcon';


function PoolsIcon(props) {
  const { style, htmlColor, ...others } = props;

  return (
    <SvgIcon style={style} {...others}
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M13.0253 5.18648C12.3631 4.94565 11.6371 4.94565 10.9749 5.18648L3.92627 7.74961L10.9749 10.3127C11.6371 10.5536 12.3631 10.5536 13.0253 10.3127L20.0739 7.74961L13.0253 5.18648ZM10.2914 3.30689C11.3952 2.90551 12.605 2.90552 13.7088 3.30689L20.7574 5.87002C22.5128 6.50833 22.5128 8.99089 20.7574 9.62919L13.7088 12.1923C12.605 12.5937 11.3952 12.5937 10.2914 12.1923L3.24278 9.62919C1.48743 8.99088 1.48744 6.50833 3.24278 5.87002L10.2914 3.30689Z" fill={htmlColor} />
      <path fillRule="evenodd" clipRule="evenodd" d="M2.05781 12.3948C2.24283 11.8744 2.81467 11.6025 3.33504 11.7876L11.33 14.6302C11.7634 14.7843 12.2367 14.7843 12.67 14.6302L20.665 11.7876C21.1854 11.6025 21.7572 11.8744 21.9422 12.3948C22.1273 12.9151 21.8554 13.487 21.335 13.672L13.3401 16.5146C12.4733 16.8228 11.5268 16.8228 10.66 16.5146L2.66502 13.672C2.14465 13.487 1.87279 12.9151 2.05781 12.3948Z" fill={htmlColor} />
      <path fillRule="evenodd" clipRule="evenodd" d="M2.05781 16.6448C2.24283 16.1244 2.81467 15.8525 3.33504 16.0376L11.33 18.8802C11.7634 19.0343 12.2367 19.0343 12.67 18.8802L20.665 16.0376C21.1854 15.8525 21.7572 16.1244 21.9422 16.6448C22.1273 17.1651 21.8554 17.737 21.335 17.922L13.3401 20.7646C12.4733 21.0728 11.5268 21.0728 10.66 20.7646L2.66502 17.922C2.14465 17.737 1.87279 17.1651 2.05781 16.6448Z" fill={htmlColor} />
    </SvgIcon>
  );
}

PoolsIcon.defaultProps = {
  style: { fontSize: 24 },
  htmlColor: "#808191",
}

PoolsIcon.propTypes = {
  style: PropTypes.object,
  htmlColor: PropTypes.string,
}

export default PoolsIcon