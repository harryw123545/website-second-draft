
const Sketch = (p5) => {

  let p5
  
  const kill = () => {
    console.log("KILL")
    p5.remove()
  }

  const sketch = (p) => {
    p5 = p
   const canvas = document.getElementById('canvas-container')

    p5.setup = () => {
      let c = p5.createCanvas(canvas.offsetWidth, canvas.offsetHeight)
        // This was missing from your code, so that may have been causing problems.
        // An alternative to setting the canvas parent this way is to pass the
        // parent to the p5 constructor.
        c.parent(canvas)
    }

    p5.draw = () => {

      p5.background(0);
  
      let time = p5.frameCount*0.013;
      let iter = p5.map(p5.mouseY, 0, p5.height, 0, 0.08)
      let iter2 = p5.map(p5.mouseX, 0, p5.width, 0, 0.02)
      
      for(let i = 0; i < 600; i++){
        p5.noStroke()
        p5.fill(127 + 127 * p5.sin(i * iter + time), 127 + 127 * p5.sin(i * iter2 + time), 127 + 127 * p5.sin(i * iter2*0.1 + time))
        
        p5.circle(p5.width/2 + 200 * p5.sin(i * 0.01 + time), i - 10, 200 + 10 + p5.sin(i * 0.01 + time))
      }
    }

    p5.windowResized = () => {
      p5.resizeCanvas(canvas.offsetWidth, canvas.offsetHeight)
    }
}

return{sketch, kill}

}

export default Sketch

