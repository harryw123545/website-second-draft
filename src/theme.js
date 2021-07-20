import { createMuiTheme } from '@material-ui/core/styles'
// import Codex from './public/fonts/codex-regular.woff'
// import Codex2 from './fonts/codex-regular.woff2'
// import webfontloader from 'gatsby-plugin-web-font-loader'



const codex = {
    fontFamily: 'codexregular',
    fontweight: 'normal',
    fontstyle: 'normal',
    src: `
      url('/fonts/codex-regular.woff') format('woff'),
      url('/fonts/codex-regular.woff2') format('woff2')
    `,
   };

  //  var WebFont = require(webfontloader);
   
// WebFontConfig = {
//   custom: {
//     families: ['codexregular']
//     // urls: [codex]
//   }
// };

// WebFont.load({
//   custom: {
//     families: ['codexregular'],
//   }
// });
  
  const theme = createMuiTheme({
    typography: {
      fontFamily: 'codexregular',
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

  