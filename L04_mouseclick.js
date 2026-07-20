// write your codes here
let shapeColor = 'white';
let x1,x2,x3,y1,y2,y3;
//type in the two basic function
function setup(){
  createCanvas(400,400);
  background(220);
}
function draw(){
    // for(let i=0; i <5;i++){
    //   //fill(0) = black fill(255) = white
    //   //fill(red,green ,blue) -> number between 0 and 255
    //     fill(shapeColor);
    //   //circle (x position , y position , diameter);
    //     circle(mouseX ,mouseY, 30);
    // //mouseX is the x position of my mouse, mouseY is the y position of my mouse
    // }
    //mousePressed()
    //mouseReleased()

    //Task 1: Random Color Preview
    fill(shapeColor)
    // circle(200,200,300);
    if(mousePressed()){
        triangle(x1,y1,x2,y2,x3,y3 );
    }
}
function mousePressed(){
    shapeColor = color(random(255),random(255),random(255));
    x1 = random(400);
    y1 = random(400);
    x2 = random(400);
    y2 = random(400);
    x3 = random(400);
    y3 = random(400);
}
function mouseReleased(){
    shapeColor = 'white';
    
}