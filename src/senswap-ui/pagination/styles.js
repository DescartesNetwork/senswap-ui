import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(theme => ({
  pagination: {
    '& ul': {
      padding: '0',
      listStyle: 'none',
      display: 'flex',
      flex: '0 0 100%',
      flexWrap: 'wrap',
      maxWidth: '100%',
      '& li': {
        '&:not(:last-child)': {
          marginRight: '8px',
        },
        '& button': {
          minWidth: 48,
          height: 48,
        },
        '& .dots': {
          margin: `${theme.spacing(0)}px ${theme.spacing(2)}px`,
          lineHeight: '48px',
        },
      }
    }
  }
}));