import { Button, Box, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles({
    container:{
      backgroundColor: 'rgba(100, 100, 100, 0.7)',
      borderRadius: 10,
      margin: 30,
      marginTop: 100,
      padding: 40,
    },
    buttonStyle:{
        backgroundColor: 'white',
        borderRadius: 10,
        buttonStyle: 'red',
        color: 'textSecondary'
      }
  })


function Portfolio () {
    const classes = useStyles()

    return (
        <Box className={classes.container}>
            Portfolio
            <Typography variant="h2" component="h2">
                h1. Heading
            </Typography>
            <Box className={classes.buttonStyle}>
                <Button> Hey, its a button </Button>
            </Box>

        </Box>
        
    )
}

export default Portfolio