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
    let num = random(5,20);
    let size = random(5,20);
    for(let i =0;i<num;i++){
        circle(random(800),random(400),)
    }
}
function keyReleased(){
    background(220);
}