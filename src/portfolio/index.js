import { Button, Box, makeStyles, Typography, ThemeProvider } from '@material-ui/core'

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
        <ThemeProvider>
        <Box className={classes.container}>
            <Typography 
                variant="h2" 
                component="h2"
                color="primary"
            >
                Heading, testing testing
            </Typography>
            <Box>
                <Button
                    color="secondary"
                > 
                    Hey, its a button 
                </Button>
            </Box>

        </Box>
        </ThemeProvider>
    )
}

export default Portfolio