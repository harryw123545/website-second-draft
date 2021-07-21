import { createMuiTheme } from '@material-ui/core/styles'


const codex = {
    fontFamily: 'Codex',
    fontweight: 'normal',
    fontstyle: 'normal',
    src: `
      local('codex-regular'),
      url('/fonts/codex-regular.woff') format('woff'),
      url('/fonts/codex-regular.woff2') format('woff2')
    `,
   };


  
  const theme = createMuiTheme({
    typography: {
      fontFamily: 'Codex',
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
          main: '#FFFFFF',
          dark: '#ba000d',
          contrastText: '#000',
        },
    },
    overrides: {
      // Style sheet name ⚛️
      MuiButton: {
        // Name of the rule
        text: {
          // Some CSS
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF1E53 90%)',
          borderRadius: 23,
          border: 0,
          color: 'white',
          height: 48,
          padding: '0 30px',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        },
      },
    },
    
  });

  export default theme

  