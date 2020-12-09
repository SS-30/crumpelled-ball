class Ball{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.5,
            friction:0.5,
            density:1
          }
          this.body=Bodies.circle(x,y,radius,options)
          this.x=x
          this.y=y
          this.radius=radius
          World.add(world,this.body)

    }
     display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        ellipseMode(CENTER)
        ellipse(this.body.position.x,this.body.position.y,this.radius)
        pop()
     }
}