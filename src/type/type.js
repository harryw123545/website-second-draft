const typeSketch = () => {

    let p5
  
  const kill = () => {
    console.log("KILL")
    p5.remove()
  }

  const sketch = (p) => {
    p5 = p
   const canvas = document.getElementById('canvas-container')

    let f = 0.0
    let spc
    let numIters

    p5.setup = () => {
      let c = p5.createCanvas(canvas.offsetWidth, canvas.offsetHeight)
        // This was missing from your code, so that may have been causing problems.
        // An alternative to setting the canvas parent this way is to pass the
        // parent to the p5 constructor.
        c.parent(canvas)

        // our grid spacing
        numIters = 1
        
        // we multiply by 1.0 to avoid a bug in processing,
        // otherwise it counts it as an int
        spc = p5.width * 1. / numIters

        p5.background(0)
    }

    p5.draw = () => {
  
      //p5.background(0, 7)

      for (let i = 0; i < numIters; i++) {
        for (let j = 0 ; j < numIters; j++) {
          // push and pop matrix so that we dont cumulatively translate 
          p5.push()
          
          // move to the current location in the grid
          //p5.translate(spc/2 + i * spc, spc/2 +  j * spc)
          p5.translate(p5.width/2 + 1, p5.height/2 + 1)
          
          // call a function which draws something at (0, 0)
          p5.drawAMohr( i + 1, j + 1)
          
          p5.pop()
        }
      }
      
      // itterate f so we have an animation
      f += 0.002
    }

    p5.drawAMohr = (i, j) => {

      let time = p5.frameCount*0.013;
      let iter = p5.map(p5.mouseX, 0, p5.width, 0.001, 0.1)
    
      // p5.stroke(127 + 127 * p5.sin(i * 0.1 + time), 127 + 127 * p5.sin(i * 0.01 + time), 127 + 127 * p5.sin(i * 0.001 + time))
      
      p5.beginShape()
      for (let k = 0; k < 26; k++) {
        //p5.stroke(127 + 127 * p5.sin(k * iter+0.2 + time), 127 + 127 * p5.sin(k * iter+0.1 + time), 127 + 127 * p5.sin(k * iter + time))
        p5.fill(127 + 127 * p5.sin(k * iter + time), 127 + 127 * p5.sin(k * iter*0.3 + time), 127 + 127 * p5.sin(k * 0.001 + time))
        p5.noStroke()
        //p5.noFill()
        p5.curveVertex(p5.noise( k * j, i + f) * spc  - spc/2, p5.noise( i, j *k + f ) * spc - spc/2)
      }
      p5.endShape()
  }



  p5.windowResized = () => {
    p5.resizeCanvas(canvas.offsetWidth, canvas.offsetHeight)
  }
}

  return{sketch, kill}
  
  }

  
  export default typeSketch
