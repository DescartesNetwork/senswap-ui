import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme =>({
  form: {
    backgroundColor: '#21232F',
    padding: '63px 35px',
    '&.MuiGrid-item': {
      padding: '63px 35px',
    }
  },
  formFrom: {
    marginBottom: '22px',
  },
  inputForm: {
    padding: '10px 0 10px 8px',
    borderRadius: '4px',
    backgroundColor: '#2A2D3A',
    marginBottom: '6px',
    '& .MuiInput-underline': {
      '&::before, &::after': {
        content: 'none',
      },
      '& .MuiSelect-select': {
        display: 'flex',
        alignItems: 'center',
        width: '90px',
        fontSize: '14px',
        lineHeight: '24px',
        fontWeight: '500',
        backgroundColor: 'unset',
      },
    },
    '& .MuiTextField-root': {
      width: 'calc(100% - 114px)',
      height: '100%',
      justifyContent: 'center',
      '&::before': {
        content: '""',
        position: 'absolute',
        width: '1px',
        height: '80%',
        backgroundColor: '#6D6E75',
        top: '0',
        left: '10px',
        bottom: '0',
        margin: 'auto',
      },
      '& input': {
        padding: '0 15px 0 25px',
        fontSize: '14px',
        fontWeight: '300',
        lineHeight: '24px',
        color: '#fff',
      }
    }
  },
  title: {
    marginBottom: '4px',
    '& p': {
      fontWeight: '500',
    },
    '&.MuiGrid-item': {
      padding: '0'
    }
  },
  amount: {
    '&.MuiGrid-item': {
      padding: '0',
    },
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    marginTop: '32px',
    width: '100%',
    '& .MuiGrid-item': {
      padding: '0',
    },
    "& button": {
      width: '100%',
      height: '48px',
      borderRadius: '4px',
      textTransform: 'unset',
      "& p": {
        fontSize: '16px',
        fontWeight: '700',
        lineHeight: '20px',
        color: '#fff',
      }
    }
  },
  renderOption: {
    padding: '0',
    '& .MuiAvatar-root': {
      marginRight: '8px',
    }
  }
}));