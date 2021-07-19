import { Box, makeStyles, Typography, ThemeProvider} from '@material-ui/core'

import theme from './theme'
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Portfolio from './portfolio'
import Bio from './bio'
import Contact from './contact'
import React from 'react';
// import Test from './test'


const tabNames = [
  { text: 'wakeling', link: '' }, 
  { text: 'portfolio', link: '/portfolio' }, 
  { text: 'bio', link: '/bio' }, 
  { text: 'contact', link: '/contact' },
  // { text: 'test', link: '/test' }

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
    zIndex: 1

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




function App() {
  
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
    <Box>
      <Router>
        <Box className={classes.container}>
          {tabNames.map(({ text, link }) => {
            return (
              <Box className={classes.headerElement}>
                <Typography 
                  variant="h3" 
                  component="h3"
                  color="primary"
                >
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
          <React.StrictMode>
            <Bio />
            </React.StrictMode>,
            document.getElementById('root')
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          {/* <Route path="/test">
            <Test />
          </Route> */}
        </Switch>
      </Router>

      </Box>
    </ThemeProvider>



  )
}

export default App;



