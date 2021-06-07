import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  xsmall: {
    width: '25px',
    height: '25px',
    backgroundColor: theme.palette.background.secondaryGray,
    fontSize: 10,
    color: theme.palette.text.primary,
  },
  small: {
    width: '34px',
    height: '34px',
    backgroundColor: theme.palette.background.secondaryGray,
    fontSize: 14,
    color: theme.palette.text.primary,
  },
  medium: {
    width: '48px',
    height: '48px',
    backgroundColor: theme.palette.background.secondaryGray,
    color: theme.palette.text.primary,
  },
  large: {
    width: '60px',
    height: '60px',
    backgroundColor: theme.palette.background.secondaryGray,
    color: theme.palette.text.primary,
  }
}));