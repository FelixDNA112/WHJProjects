class Ball {
    constructor(x,y,radius){
        var options = {
            'restitution': 0.5,
            'friction': 0.5,
            'density':0.5
        }
        this.body = Bodies.circle(x, y, radius/2, options);
        this.radius = radius
        World.add(world, this.body);


    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //ellipseMode(RADIUS);
        fill("orange")
        ellipse(0, 0, this.radius, this.radius);
        pop();
}
}