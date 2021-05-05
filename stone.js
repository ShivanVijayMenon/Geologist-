class Stone {

    constructor(x, y, width, height){
        
        var stoneOptions = {

            restitution: 0.1,
            density:12, 
            friction:2

        }

        this.body = Bodies.rectangle(x, y, width, height, stoneOptions);
        World.add(world, this.body)

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
        rect(0, 0, this.width, this.height);

        pop ();

    }

}