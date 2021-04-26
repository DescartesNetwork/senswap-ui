import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(theme => ({
  card: {
    width: '100%',
    height: '100%',
    borderRadius: '24px',
    backgroundColor: '#21232F',
    transition: '.3s linear',
  },
  cardContent: {
    padding: '24px',
    '&:first-child': {
      borderBottom: '1px solid #e4e4e41a',
    },
    '&:nth-child(2)': {
      padding: '20px 24px',
    },
    '& h5': {
      fontSize: '36px',
      fontWeight: '600',
      lineHeight: '36px',
      marginBottom: '6px',
    },
    '& p': {
      fontSize: '12px',
      fontWeight: '400',
      lineHeight: '12px',
      marginBottom: '0',
    }
  },
  cardAction: {
    padding: '8px 24px',
    backgroundColor: '#2B2D3A',
    '& p': {
      fontSize: '12px',
      fontWeight: '400',
      lineHeight: '12px',
      marginBottom: '0'
    },
    '&:hover $focusHighlight': {
      opacity: 0,
      // backgroundColor: "red",
    },
    '&:hover $buttonDetails': {
      bottom: '0',
      transition: '.15s linear',
    }
  },
  focusHighlight: {},
  buttonDetails: {
    display: 'block',
    position: 'absolute',
    width: '100%',
    height: '100%',
    // top: '0',
    left: '0',
    bottom: '-100%',
    // display: 'none',
    backgroundColor: 'red',
    transition: '.1s linear',
    '& *:not(p)': {
      with: '100%',
      height: '100%',
    },
    '& a': {
      color: '#fff',
      textDecoration: 'unset !important',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& p': {
        margin: '0',
        fontSize: '14px',
        fontWeight: '500',
        lineHeight: '18px',
      }
    }
  },
  cardExpand: {
    transition: '.2s linear',
    // width: '56px',
    height: '56px',
    // borderRadius: '56px',
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
      backgroundColor: '#161920',
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
  badge: {
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
  }
}));
