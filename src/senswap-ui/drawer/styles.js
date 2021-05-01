import { makeStyles } from '@material-ui/core/styles';

const SIDEBAR_WIDTH = 16;

export default makeStyles(theme => ({
  noWrap: {
    flexWrap: 'nowrap',
  },
  stretch: {
    flex: '1 1 auto',
  },
  sidebar: {
    width: SIDEBAR_WIDTH * theme.spacing(2),
    flexShrink: 0,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  paper: {
    width: (SIDEBAR_WIDTH - 2) * theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
  },
}));