class Box {
    constructor (x,y,w,h){
        var options = {
            restitution: 0.3,
            friction: 0.3,
            density: 1,
            isStatic: true
        }
        this.w = w;
        this.h = h;
        this.box = Bodies.rectangle(x,y,this.w,this.h,options);
        World.add(world,this.box);
    }
    display(){
        fill(255,255,255);
        rectMode(CENTER);
        rect(this.box.position.x,this.box.position.y,this.w,this.h);
    }
}