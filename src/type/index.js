import { Box, makeStyles, ThemeProvider } from '@material-ui/core'
import p5 from 'p5'
import { useEffect, useRef } from 'react'
import typeSketch from './type'
import theme from '../theme'



const useStyles = makeStyles({
    container:{
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      margin: 0,
      padding: 0,
      zIndex: -1,
    },
  })

  function Type () {
    const classes = useStyles()
    const ref = useRef()

    useEffect(() => {
      const{sketch, kill} = typeSketch()
      ref.current = new p5(sketch)
      return function() {
        ref.current = null
        kill()
      }
    }, [ref])


    return <ThemeProvider theme={theme}>
     
      <Box className={classes.container} id='canvas-container' >
          
      </Box>
    </ThemeProvider>
        
}

export default Type