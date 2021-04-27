import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  noWrap: {
    flexWrap: 'noWrap',
  },
  stretch: {
    flex: '1 1 auto',
  },
  table: {
    backgroundColor: 'transparent',
    borderCollapse: 'separate'
  },
  row: {
    backgroundColor: theme.palette.background.paper,
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.secondary.main,
    },
    '& > *:first-child': {
      borderTopLeftRadius: theme.shape.borderRadius,
      borderBottomLeftRadius: theme.shape.borderRadius,
    },
    '& > *:last-child': {
      borderTopRightRadius: theme.shape.borderRadius,
      borderBottomRightRadius: theme.shape.borderRadius,
    },
  },
  cell: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    border: 'none'
  },
  cellHead: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    border: 'none'
  },
}));