const bioSketch = (p) => {

    const canvas = document.getElementById('canvas-container')
  
      p.setup = () => {
        let c = p.createCanvas(canvas.offsetWidth, canvas.offsetHeight);
        // This was missing from your code, so that may have been causing problems.
        // An alternative to setting the canvas parent this way is to pass the
        // parent to the p5 constructor.
        c.parent(canvas)
    
        p.angleMode(p.DEGREES)
        p.rectMode(p.CENTER)
       
      }
  
      p.draw = () => {
  
        p.background(0, 20)
        let time = p.frameCount
        let iter = p.map(p.mouseX, 0, p.width, 0, 3)
        let col = p.map(p.mouseY, 0, p.height, 0.02, 3.5)
        
        p.translate(p.width/2, p.height/2)
        
        for(var i = 0; i < 200; i++){
        p.push()
        p.rotate(p.cos(p.frameCount + i * iter) * 80)
        p.stroke(127 + 127 * p.sin(i * col + time), 127 + 127 * p.sin(i * 2 + time), 127 + 127 * p.sin(i * 0.5 + time))
        p.noFill()
        p.rect(0, 0, 620 - i * 3.12, 620 - i * 3.12, 200 - i)
        p.pop()
        }
      }
  
      p.windowResized = () => {
        p.resizeCanvas(canvas.offsetWidth, canvas.offsetHeight)
        p.background(0, 20)
      }
  }
  
  export default bioSketch
