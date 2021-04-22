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
          width: '48px',
          height: '48px',
          color: '#fff',
          borderRadius: '12px',
          border: '.5px solid',
          borderColor: '#e4e4e41a !important',
          fontWeight: 'bold',
          fontSize: '14px',
          lineHeight: '24px',
          backgroundColor: 'transparent',
          margin: '0',
          '&.Mui-selected, &.selected': {
            backgroundColor: '#FF3122',
            fontWeight: '500',
          },
          '&:hover': {
            backgroundColor: '#ff312280 !important'
          },
          '&.disabled': {
            display: 'none',
          },
          '&.btn-control': {
            width: 'auto',
            paddingLeft: '24px',
            paddingRight: '24px',
          }
        },
        '& .dots': {
          margin: '0',
          lineHeight: '48px',
        },
      }
    }
  }
}));