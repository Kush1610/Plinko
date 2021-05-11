class Particles {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            //isStatic:true
        }
        this.r = 15;
        this.body = Bodies.circle(x, y, this.r, options);
        this.image = loadImage("plinko.png");
        World.add(world, this.body);
    }
    display() {

        //var pos = this.body.position;
       // var angle = this.body.angle;

       // push();

		var pos =this.body.position;
		  imageMode(CENTER);
		  image(this.image, pos.x,pos.y,this.r, this.r)
       // pop();
    }

};