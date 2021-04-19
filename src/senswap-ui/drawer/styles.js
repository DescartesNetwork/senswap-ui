import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  noWrap: {
    flexWrap: 'noWrap',
  },
  stretch: {
    flex: '1 1 auto',
  },
  paper: {
    backgroundColor: theme.palette.background.default,
  },
}));