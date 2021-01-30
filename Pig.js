class Pig{
    constructor(x,y){
        var options = {
            'restitution' : 0.8,
            'friction' : 0.3,
            'density' : 1,
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        World.add(myWorld,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("yellow");
        fill("red");
        rect(0,0,this.width,this.height);
        pop();

    }
};