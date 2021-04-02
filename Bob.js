class bob{
    constructor(x,y,radius){
        var options ={
            isStatic:false,
            restitution:1,
            friction:0,
            density:0.8
        }
        this.body = Bodies.circle(x,y,25,options);
        this.radius=radius;
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(CENTER);
        ellipse(0, 0, this.width );
        pop();
    }
}