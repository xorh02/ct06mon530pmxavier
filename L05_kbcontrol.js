// write your codes here
let rectsize =  50;
function setup(){
    createCanvas(800,400);

}
function draw(){
        background(220);
    rect(width/2,height/2,rectsize,rectsize);
}
function keyPressed(){
    rectsize = 100;
}
function keyReleased(){
    rectsize =50;
}