import { Button, Box, makeStyles, ThemeProvider } from '@material-ui/core'
import theme from '../theme'


const useStyles = makeStyles({
    container:{
      borderRadius: 10,
      margin: 30,
      marginTop: 100,
      padding: 40,
    },
    buttonStyle:{
        borderRadius: 10,
      }
  })



function Portfolio () {
    const classes = useStyles()

    return (
        <ThemeProvider theme={theme}>
        <Box className={classes.container}>
            <div class='codex'>
            <h1
                // variant="h1" 
                // component="h1"
                color="primary"
            >
                Heading, testing testing
            </h1>
            </div>
            <h2
                // variant="h2" 
                // component="h2"
                color="primary"
            >
                Hey, hows it going test test test?
            </h2>
            <Box>
                <Button
                    color="primary"
                > 
                    Hey, its a button 
                </Button>
            </Box>

        </Box>
        </ThemeProvider>
    )
}

export default Portfolio