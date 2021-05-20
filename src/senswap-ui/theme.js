import { createMuiTheme } from '@material-ui/core/styles';

const common = {
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
    caption: { fontFamily: 'Inter', fontWeight: 300, fontSize: 10, textTransform: 'None' },
  },
}

const dark = {
  palette: {
    type: 'dark',
    primary: { main: '#ff3122' },
    secondary: { main: '#1f2128' },
    text: {
      primary: '#ffffff',
      secondary: '#808191',
      hint: '#ffffff',
      disabled: '#808191',
    },
    background: {
      default: '#161920',
      paper: '#21232f',
      primary: '#ff3122',
      hover: '#ff312280',
      secondary: '#2B2D3A',
      secondaryDark: '#161920',
      secondaryGray: '#6D6E75',
      secondaryLight: '#ffffff',
      secondaryBrown: '#44444A',

    },
    border: {
      default: '#e4e4e41a',
    }
  }
}

const light = {
  palette: {
    type: 'light',
    primary: { main: '#ff3122' },
    secondary: { main: '#1f2128' },
    background: {
      default: '#FBFBFB',
    }
  }
}

const theme = (variant = 'dark') => createMuiTheme({
  ...common,
  ...(variant === 'dark' ? dark : light)
});

export default theme;