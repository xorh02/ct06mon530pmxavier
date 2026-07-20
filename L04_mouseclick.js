// write your codes here
let shapeColor = 'blue';
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
    
}
function mousePressed(){
    shapeColor = random(0,255);
}
function mouseReleased(){
    shapeColor = color(random(255),random(255),random(255));
}