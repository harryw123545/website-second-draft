import { Button, Box, makeStyles, Typography } from '@material-ui/core'

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
        <Box className={classes.container}>
            <Typography variant="h2" component="h2">
                Heading, testing testing
            </Typography>
            <Box>
                <Button> Hey, its a button </Button>
            </Box>

        </Box>
        
    )
}

export default Portfolio