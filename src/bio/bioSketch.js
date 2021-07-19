const bioSketch = () => {

  let p5
  
  const kill = () => {
    console.log("KILL")
    p5.remove()
  }
   const sketch = (p) => {
     p5 = p
    const canvas = document.getElementById('canvas-container')

    p5.setup = () => {

      let c = p5.createCanvas(canvas.offsetWidth, canvas.offsetHeight);
      // This was missing from your code, so that may have been causing problems.
      // An alternative to setting the canvas parent this way is to pass the
      // parent to the p5 constructor.
      c.parent(canvas)
  
      p5.angleMode(p5.DEGREES)
      p5.rectMode(p5.CENTER)
     
    }

    p5.draw = () => {

      console.log("inside sketch")
      p5.background(0, 20)
      let time = p5.frameCount
      let iter = p5.map(p5.mouseX, 0, p5.width, 0, 3)
      let col = p5.map(p5.mouseY, 0, p5.height, 0.02, 3.5)
      
      p5.translate(p5.width/2, p5.height/2)
      
      for(var i = 0; i < 200; i++){
      p5.push()
      p5.rotate(p5.cos(p5.frameCount + i * iter) * 80)
      p5.stroke(127 + 127 * p5.sin(i * col + time), 127 + 127 * p5.sin(i * 2 + time), 127 + 127 * p5.sin(i * 0.5 + time))
      p5.noFill()
      p5.rect(0, 0, 620 - i * 3.12, 620 - i * 3.12, 200 - i)
      p5.pop()
      }
    }

    p5.windowResized = () => {
      p5.resizeCanvas(canvas.offsetWidth, canvas.offsetHeight)
      p5.background(0, 20)
    }

   }

   return{sketch, kill}
  
      
  }
  
  export default bioSketch
