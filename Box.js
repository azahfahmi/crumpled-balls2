class Box {
  constructor(x, y, width, height){
  this.body = Bodies.rectangle(x,y,width,height);
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.dusty = loadImage("dustbin.png");
  }
   
  display(){
    push();
    imageMode(CENTER);
    image(this.dusty,700,450,250,333);
    pop();
  }    
}