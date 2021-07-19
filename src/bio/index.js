import { makeStyles } from '@material-ui/core'
import p5 from 'p5'
import { Box, useEffect } from 'react'
import bioSketch from './bioSketch'
import React from 'react';




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
    const elementRef = React.useRef()

    useEffect(() => {
      new p5(bioSketch, elementRef.current)
    }, [])

    

    return <Box className={classes.container} id='canvas-container'  />
        
 
}

export default Bio