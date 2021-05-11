import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  paper: {
    borderRadius: theme.shape.borderRadius / 3,
    padding: `${theme.spacing(2)}px ${theme.spacing(2)}px ${theme.spacing(3)}px`
  },
  spacing: {
    padding: theme.spacing(0),
    '& .close': {
      minWidth: 'unset',
      padding: theme.spacing(0),
    },
    '& .img': {
      display: 'block',
      width: 90,
      height: 90,
      margin: 'auto',
      marginBottom: theme.spacing(2),
    },
    '& .status': {
      fontSize: 20,
      lineHeight: '24px',
      fontWeight: 600,
      padding: theme.spacing(0),
      marginBottom: theme.spacing(1),
    },
    '& .message': {
      fontSize: 14,
      lineHeight: '18px',
      fontWeight: 300,
      marginBottom: theme.spacing(7),
    },
    '& .submit': {
      flex: '1 1 100%',
      padding: theme.spacing(1) + 4,
    },
  },
}));