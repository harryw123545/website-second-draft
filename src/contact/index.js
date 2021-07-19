import { Box, makeStyles, ThemeProvider } from '@material-ui/core'
import p5 from 'p5'
import { useEffect, useRef } from 'react'
import Sketch from './sketch'
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

  function Contact () {
    const classes = useStyles()
    const ref = useRef()

    useEffect(() => {
      const{sketch, kill} = Sketch()
      ref.current = new p5(sketch)
      return function() {
        ref.current = null
        kill()
      }
    }, [ref])

// function Contact () {
//     const classes = useStyles()
//     const ref = useRef()

//     useEffect(() => {
//       ref.current = new p5(Sketch)
//       return function() {
//         ref.current = null
//       }
//     }, [ref])

    

    return <ThemeProvider theme={theme}>
     
      <Box className={classes.container} id='canvas-container' >
          
      </Box>
    </ThemeProvider>
        
}

export default Contact