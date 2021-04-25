import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: '#ed423b' },
    secondary: { main: '#1F2128' },
    text: {
      primary: '#FFFFFF',
      secondary: '#808191',
      hint: '#FFFFFF',
      disabled: '#808191',
    },
    background: {
      default: '#161920',
      paper: '#21232F'
    }
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: 'Inter',
    fontSize: 12,
    h1: { fontFamily: 'Poppins', fontWeight: 600, fontSize: 48, textTransform: 'None' },
    h2: { fontFamily: 'Poppins', fontWeight: 700, fontSize: 40, textTransform: 'None' },
    h3: { fontFamily: 'Inter', fontWeight: 500, fontSize: 40, textTransform: 'None' },
    h4: { fontFamily: 'Poppins', fontWeight: 600, fontSize: 36, textTransform: 'None' },
    h5: { fontFamily: 'Inter', fontWeight: 500, fontSize: 24, textTransform: 'None' },
    h6: { fontFamily: 'Poppins', fontWeight: 600, fontSize: 18, textTransform: 'None' },
    subtitle1: { fontFamily: 'Inter', fontWeight: 500, fontSize: 18, textTransform: 'None' },
    subtitle2: { fontFamily: 'Poppins', fontWeight: 500, fontSize: 12, textTransform: 'None' },
    body1: { fontFamily: 'Inter', fontWeight: 400, fontSize: 14, textTransform: 'None' },
    body2: { fontFamily: 'Inter', fontWeight: 300, fontSize: 12, textTransform: 'None' },
    caption: { fontFamily: 'Inter', fontWeight: 300, fontSize: 9, textTransform: 'None' },
  },
});

export default theme;