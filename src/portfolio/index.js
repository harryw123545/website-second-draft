import { Button, Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    container:{
      backgroundColor: 'rgba(100, 100, 100, 0.7)',
      borderRadius: 10,
      margin: 30,
      marginTop: 100,
      padding: 40
    },
    buttonStyle:{
        backgroundColor: 'red',
        borderRadius: 10,
        padding: 40
      }
  })


function Portfolio () {
    const classes = useStyles()

    return (
        <Box className={classes.container}>
            Portfolio
            <h1>test test test</h1>
            <Box className={classes.buttonStyle}>
                <Button> Hey, its a button </Button>
            </Box>

        </Box>
        
    )
}

export default Portfolio