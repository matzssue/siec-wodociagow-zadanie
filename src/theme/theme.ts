import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#f3f3f3',
    },
    secondary: {
      main: '#f3f3f3',
    },
    info: {
      main: '#D12727',
    },
    background: {
      default: '#1d1d1d',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
      fontSize: '1.2rem',
    },
  },
  components: {
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: 'yellow',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: '1.1rem',
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        thumb: {
          color: '#137813',
        },
      },
    },
  },
});
