import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  noWrap: {
    flexWrap: 'noWrap',
  },
  stretch: {
    flex: '1 1 auto',
  },
  logo: {
    cursor: 'pointer',
    width: 36,
  },
  subtitle: {
    fontSize: 9,
    marginBottom: -4,
    fontWeight: theme.typography.fontWeightLight,
    color: theme.palette.text.secondary
  },
}));