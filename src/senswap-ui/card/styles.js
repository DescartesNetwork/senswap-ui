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
    '& p': {
      fontSize: '12px',
      fontWeight: '400',
      lineHeight: '12px',
      marginBottom: '0'
    },
    '&:hover $focusHighlight': {
      opacity: 1,
      backgroundColor: "red"
    },
  },
  focusHighlight: {}
}));
