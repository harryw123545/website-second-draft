import { createMuiTheme } from '@material-ui/core/styles'
import Codex from './fonts/codex-regular.woff'
import Codex2 from './fonts/codex-regular.woff2'


const codex = {
    fontFamily: 'Codex',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 600,
    src: `
      local('Codex'),
      local('codex-regular'),
      url(${Codex}) format('woff'),
      url(${Codex2}) format('woff2')
    `,
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
  };
  
  const theme = createMuiTheme({
    typography: {
      fontFamily: 'codex',
      overrides: {
        MuiCssBaseline: {
          '@global': {
            '@font-face': [codex],
          },
        },
      },
      subtitle1: {
        fontSize: 42,
        fontStyle: 'bold',
      },
      body1: {
        fontWeight: 500,
      },
      button: {
        fontStyle: 'italic',
      },
    },
    palette: {
      background: {
        default: "#111812"
      },
        primary: {
          light: '#757ce8',
          main: '#fefefe',
          dark: '#002884',
          contrastText: '#fff',
        },
        secondary: {
          light: '#ff7961',
          main: '#f44336',
          dark: '#ba000d',
          contrastText: '#000',
        },
    },
  });

  export default theme

  