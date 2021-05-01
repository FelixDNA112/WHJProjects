class Stone{
	constructor(x,y,length,width){
		var options = {
			'density':12,
			'friction': 0.9,
			'restitution':0.8
		}
	
	
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.length = length
        this.width = width
		this.body=Bodies.rectangle(this.x, this.y,this.length,this.width,options)
		World.add(world, this.body);

	
}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
			//draw the ellipse here to display the rubber ball
			rect(0,0,this.length,this.width)

			pop()
	}
}
