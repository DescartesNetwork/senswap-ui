import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(theme => ({
  card: {
    borderRadius: '24px',
    backgroundColor: '#21232F'
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
  }
}));
