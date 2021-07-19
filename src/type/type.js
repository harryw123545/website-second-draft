const typeSketch = () => {

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

      p5.background(0, 10);
  
      p5.noStroke()
      p5.fill(255)
      p5.circle(p5.mouseX, p5.mouseY, 60, 60)
    }

    p5.windowResized = () => {
      p5.resizeCanvas(canvas.offsetWidth, canvas.offsetHeight)
    }
}
    
    

return{sketch, kill}


}

export default typeSketch