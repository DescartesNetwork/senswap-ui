const SIDEBAR_WIDTH = 15;

// eslint-disable-next-line
export default theme => ({
  noWrap: {
    flexWrap: 'noWrap',
  },
  stretch: {
    flex: '1 1 auto',
  },
  logo: {
    cursor: 'pointer'
  },
  sidebar: {
    width: theme.spacing(2) * SIDEBAR_WIDTH,
    flexShrink: 0,
  },
  paper: {
    width: theme.spacing(2) * (SIDEBAR_WIDTH - 2),
    padding: theme.spacing(2),
  },
});