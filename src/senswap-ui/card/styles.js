import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  noWrap: {
    flexWrap: 'noWrap',
  },
  stretch: {
    flex: '1 1 auto',
  },
  card: {
    borderRadius: theme.shape.borderRadius * 2,
  },
  cardExpand: {
    transition: '.2s linear',
    height: '56px',
    overflow: 'hidden'
  },
  arrowIcon: {
    transition: '.2s .2s linear',
  },
  rotate: {
    transition: '.2s .3s linear',
    transform: 'rotateZ(180deg);'
  },
  headerButton: {
    color: '#dadada',
    '& button': {
      padding: '0',
      minWidth: '24px',
      width: '24px',
      height: '24px',
      backgroundColor: theme.palette.background.secondaryDark,
      '&:not(:first-child)': {
        marginLeft: '5px',
      },
      '& svg': {
        width: '14px',
        height: 'auto',
      }
    }
  },
  cardBalanceContent: {
    padding: '16px',
    '&:last-child': {
      paddingBottom: '40px'
    },
    '& h5': {
      fontSize: '32px',
      fontWeight: 500,
      lineHeight: '32px',
    },
    '& .MuiTypography-subtitle2': {
      fontSize: '18px',
      color: '#4FBF67',
      lineHeight: '32px',
    },
    '& .MuiTypography-subtitle1': {
      fontSize: '18px',
      lineHeight: '18px',
      color: '#fff',
      marginBottom: '16px',
    }
  },
  chip: {
    padding: '0 !important',
    'span': {
      color: '#fff',
      fontSize: '16px',
      fontWeight: '600'
    }
  },
  buttonBalance: {
    display: 'flex',
    justifyContent: 'space-between',
    '& button': {
      borderRadius: '12px',
      padding: '12px 25px',
      fontSize: '14px',
      lineHeight: '24px',
      fontWeight: '500',
      textTransform: 'unset'
    }
  },
}));
