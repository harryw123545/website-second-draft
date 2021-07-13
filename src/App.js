import { Box, makeStyles, Typography, ThemeProvider} from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/purple'
import Codex from './fonts/Codex-Regular.otf';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Portfolio from './portfolio'
import Bio from './bio'
import Contact from './contact'

const tabNames = [
  { text: 'wakeling', link: '' }, 
  { text: 'portfolio', link: '/portfolio' }, 
  { text: 'bio', link: '/bio' }, 
  { text: 'contact', link: '/contact' }
]

const useStyles = makeStyles({
  container:{
    display: 'flex',
    flexDirection: 'row',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    margin: 0,
    padding: 0,

  },
  headerElement: {
    marginLeft: 20,
    fontSize: 40,
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
})

const codex = {
  fontFamily: 'Codex',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 600,
  src: `
    local('Codex'),
    local('Codex-Regular'),
    url(${Codex}) format('otf')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const theme = createMuiTheme({
  typography: {
    fontFamily: 'codex',
    subtitle1: {
      fontSize: 52,
      fontStyle: 'bold',
      color: red,
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: 'italic',
    },
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#33FF52',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    }
  }
});

function App() {
  
  const classes = useStyles()
  return (
 
    
  <Box>
    <Router>
      <Box className={classes.container}>
        {tabNames.map(({ text, link }) => {
          return (
            <Box className={classes.headerElement}>
              <ThemeProvider theme={theme}>
              <Typography variant="subtitle1" color="primary">
                <Link to={link}>{text}</Link>
              </Typography>
              </ThemeProvider>
            </Box>
          )
    })}
  </Box>

      <Switch>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/bio">
          <Bio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
    </Box>
  )
}

export default App;



