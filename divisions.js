class Divisions {
    constructor(x, y, w, h) {
        var options = {

            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = 30;
        this.h = h;
        this.image = loadImage("rod.png");
        World.add(world, this.body);
    }
    display() {

        var pos= this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.w, this.h);
       // var pos =this.body.position;
      //  rectMode(CENTER);
      //  fill("white");
     // rect(pos.x, pos.y, this.w,this.h);
    }
};