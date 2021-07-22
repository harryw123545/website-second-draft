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
      f += 0.004
    }

    p5.drawAMohr = (i, j) => {

      let iter = p5.map(p5.mouseX, 0, p5.width, 0.001, 0.19)
      let iter2 = p5.map(p5.mouseY, 0, p5.height, 0.3, 0.01)

      let time = p5.frameCount*iter2;
    
      
      p5.beginShape()
      for (let k = 0; k < 19; k++) {
        p5.fill(127 + 127 * p5.sin(k * iter + time), 127 + 127 * p5.sin(k * iter*0.3 + time), 127 + 127 * p5.sin(k * 0.001 + time), 90)
        p5.noStroke()
        p5.curveVertex(p5.noise( k * j, i + f) * spc  - spc/2, p5.noise( i, j *k + f ) * spc - spc/2)
        p5.vertex(p5.noise( k * j, i + f), p5.noise( i, j *k + f ))
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
