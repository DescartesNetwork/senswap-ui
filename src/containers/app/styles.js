// eslint-disable-next-line
export default theme => {

  return {
    noWrap: {
      flexWrap: 'nowrap',
    },
    stretch: {
      flex: '1 1 auto',
    },
    safe: {
      margin: -theme.spacing(1) / 2
    },
  };
};