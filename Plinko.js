class Plinko {
    constructor(x,y){
        var options = {
            isStatic:true
        }

        this.body = Bodies.circle(x,y,10,options);
        World.add(world,this.body);
    }
    display(){
        var position = this.body.position;
        ellipseMode(CENTER);
        fill("white");
        ellipse(position.x,position.y,25,10);
    }
}