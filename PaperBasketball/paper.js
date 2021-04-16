class Paper{
    constructor(x, y) {
        var options = {
            isStatic: true,
            'restitution':0.3,
            'friction':0,
            'density':1.2
        }
        this.body = Bodies.rectangle(x, y, radius, options);
        this.image = loadImage("paper.png");
        World.add(world, this.body);
      }
      display(){
      image(this.image, 200, 100)
}
}