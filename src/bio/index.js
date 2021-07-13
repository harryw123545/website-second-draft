import { Box, makeStyles } from '@material-ui/core'
import p5 from 'p5'
import { useEffect } from 'react'
import bioSketch from './bioSketch'

const useStyles = makeStyles({
    container:{
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      margin: 0,
      padding: 0
    },
  })


function Bio () {
    const classes = useStyles()

    useEffect(() => {
      new p5(bioSketch)
    }, [])

    

    return <Box className={classes.container} id='canvas-container' />
        
}

export default Bio