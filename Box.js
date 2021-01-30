class Box{
    constructor(x,y,width,height){
        var options = {
            'restitution' : 0.8,
            'friction' : 0.9,
            'density' : 2.0,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        console.log(this.body);
        World.add(myWorld,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill(255);
        rect(0,0,this.width,this.height);
        pop();

    }
};