import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(247, 206, 103)',
      light: '#FFF',
    },
    success: {
      main: 'rgb(247, 206, 103)',
    },
    secondary: {
      main: 'rgb(247, 148, 156)',
    },
    error: {
      main: '#ff0000',
    },
    background: {
      default: '#222222',
    },
  },
});

export default theme;
