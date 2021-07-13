import { Box, makeStyles } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Portfolio from './portfolio'
import Bio from './bio'
import Contact from './contact'

const tabNames = [
  { text: 'harry wakeling', link: '' }, 
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
    padding: 0
  },
  headerElement: {
    marginLeft: 20,
    fontSize: 40,
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  }
})

function App() {
  
  const classes = useStyles()
  return (
 
    
  <Box>
    <Router>
      <Box className={classes.container}>
        {tabNames.map(({ text, link }) => {
          return (
            <Box className={classes.headerElement}>
              <Link to={link}>{text}</Link>
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



