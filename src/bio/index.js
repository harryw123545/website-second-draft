import { Box, makeStyles } from '@material-ui/core'
import p5 from 'p5'
import { useEffect, useRef } from 'react'
import bioSketch from './bioSketch'




const useStyles = makeStyles({
    container:{
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      margin: 0,
      padding: 0,
    },
  })



  function Bio () {
    const classes = useStyles()
    const ref = useRef(p5)

    useEffect(() => {
      ref.current = new p5(bioSketch)
    }, [ref])

    

    return <Box className={classes.container} id='canvas-container' />
        
}

export default Bio