class Paper{
    constructor(x, y){
       var options = {
           isStatic : false,
           restitution:0.3,
           friction:0.5,
           density:1.2
       }
       this.body = Bodies.circle(x,y,70,options);
       this.x = x;
       this.y = y;
       this.r = 70;
       this.cru = loadImage("papa.png");
    }

    display(){
        push();
        imageMode(CENTER);
        image(this.cru,100,355,70,70);
        pop();
    }
}