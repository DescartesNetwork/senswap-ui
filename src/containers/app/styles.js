// eslint-disable-next-line
export default theme => {
  console.log(theme);

  return {
    noWrap: {
      flexWrap: 'noWrap',
    },
    stretch: {
      flex: '1 1 auto',
    },
    safe: {
      margin: -theme.spacing(1) / 2
    }
  };
};