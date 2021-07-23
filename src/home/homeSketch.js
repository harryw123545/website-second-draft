
const homeSketch = () => {

    let p5
    
    const kill = () => {
      console.log("KILL")
      p5.remove()
    }
  
    const sketch = (p) => {
      p5 = p
     const canvas = document.getElementById('canvas-container')
     
      var walkers = []
      // var total = 15
      // var walker
  
      p5.setup = () => {
        let c = p5.createCanvas(canvas.offsetWidth, canvas.offsetHeight)
          // This was missing from your code, so that may have been causing problems.
          // An alternative to setting the canvas parent this way is to pass the
          // parent to the p5 constructor.
          c.parent(canvas)
          p5.background(0);

          for(let i = 0; i < 15; i++){
            walkers[i] = new Walker(p5.random(0, p5.width), p5.random(0, p5.height))
          }
      }
  
      p5.draw = () => {
        for(let i = 0; i < 15; i++){
          walkers[i].update()
          walkers[i].show()
        }
          
      }

      class Walker{
          constructor(x, y){
            this.pos = p5.createVector(x, y)
          }

          update(){
            this.pos.x = this.pos.x + p5.random(-10, 10)
            this.pos.y = this.pos.y + p5.random(-10, 10)
          }

          show(){
            p5.stroke(255, 100)
            p5.strokeWeight(8)
            p5.point(this.pos.x, this.pos.y)
          }
      }

      
  
      p5.windowResized = () => {
        p5.resizeCanvas(canvas.offsetWidth, canvas.offsetHeight)
      }
  }
  
  return{sketch, kill}
  
  }
  
  export default homeSketch

  
  