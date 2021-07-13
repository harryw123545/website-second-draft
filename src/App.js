import { Box, makeStyles, Typography, ThemeProvider} from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'
import Codex from './fonts/Codex-Regular.otf';
import { purple } from '@material-ui/core/colors'
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
    primary: {
      main: '#fefefe'
    },
    secondary: purple
  },
  zIndex: {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  }
});

function App() {
  
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>

    <Box>
      <Router>
        <Box className={classes.container}>
          {tabNames.map(({ text, link }) => {
            return (
              <Box className={classes.headerElement}>
                <Typography variant="subtitle1">
                  <Link to={link}>{text}</Link>
                </Typography>
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
    </ThemeProvider>

  )
}

export default App;



