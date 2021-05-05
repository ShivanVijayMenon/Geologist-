class Iron {

    constructor(x, y, width, height){

        var ironOptions = {

            restitution: 0.7,
            density: 30,
            friction: 3

        }

        this.body = Bodies.rectangle(x, y, width, height, ironOptions);
        World.add(world, this.body);

        this.width = width;
        this.height = height;

    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push ();

        translate (pos.x, pos.y);

        rotate (angle);

        rectMode(CENTER);
        fill ("white");
        rect(0, 0, this.width, this.height);

        pop ();

    }

}