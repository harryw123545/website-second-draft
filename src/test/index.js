// import theme from '../theme'
import p5 from 'p5'
import React, { Component } from 'react'
  

class Test extends Component {

    constructor() {
        super()

        this.myRef = React.createRef()
        this.sketch = new p5( p => {
    
        var x = 100
        var y = 100
      
        p.setup = () => {
          p.createCanvas(200, 200)
          .parent('renderTarget')
        };
      
        p.draw = () => {
            p.background(0)
            p.fill(255)
            p.rect(x,y,50,50)
        }
      })
    }

    render(){

    return (
        <div className="Test">
            <div id="renderTarget" ref={this.myRef}></div>
        </div>
    )
}
}

export default Test