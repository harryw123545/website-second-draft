const sketch = (p) => {

  const canvas = document.getElementById('canvas-container')

    p.setup = () => {
      p.createCanvas(canvas.offsetWidth, canvas.offsetHeight)
    }

    p.draw = () => {

      p.background(0);
  
      let time = p.frameCount*0.013;
      let iter = p.map(p.mouseY, 0, p.height, 0, 0.08);
      let iter2 = p.map(p.mouseX, 0, p.width, 0, 0.02);
      
      for(let i = 0; i < 600; i++){
        p.noStroke();
        p.fill(127 + 127 * p.sin(i * iter + time), 127 + 127 * p.sin(i * iter2 + time), 127 + 127 * p.sin(i * iter2*0.1 + time));
        
        p.circle(p.width/2 + 200 * p.sin(i * 0.01 + time), i - 10, 200 + 10 + p.sin(i * 0.01 + time));
      }
    }

    p.windowResized = () => {
      p.resizeCanvas(canvas.offsetWidth, canvas.offsetHeight)
    }
}

export default sketch

