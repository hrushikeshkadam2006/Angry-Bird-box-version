class Bird{
    constructor(x,y){
        var options = {
            'restitution' : 0.5,
            'friction' : 1.0,
            'density' : 1.5,
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        console.log(this.body);
        World.add(myWorld,this.body);
    }
    display(){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("blue");
        fill("blue");
        rect(0,0,this.width,this.height);
        pop();

    }
};
 