// write your codes here


//type in the two basic function

function setup(){
  createCanvas(600,400);
  background(220);
}
function draw(){

}
function mouseDragged(){
    //challenge 3
    let size = random(5,20);
    fill(random(255),random(255),random(255));
    //random(-20,20)-> generate a number between -20 and 20
    circle(mouseX +random(-20,20),mouseY + random(-20,20),size);
}
function mouseReleased(){
    background(220);
}