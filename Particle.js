class Particle {
    constructor(x,y){
        var options = {
            restitution:0.4
        }
        this.body = Bodies.circle(x,y,10,options);
        //console.log(this.body.position.x+", "+this.body.position.y);
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }
    display(){
        var posi = this.body.position;
        ellipseMode(CENTER);
        fill(this.color);
        ellipse(posi.x,posi.y,20,20);
        //console.log(posi.x+", "+posi.y);
    }
}