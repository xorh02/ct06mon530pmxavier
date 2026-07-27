// write your codes here

function setup(){
    createCanvas(800,400);
}
function draw(){
    background(220);
   
}
function keyPressed(){
    let num = random(5,20);
    let size = random(5,20);
    for(let i =0;i<num;i++){
        circle(random(800),random(400),size);
    }
}
function keyReleased(){
    background(220);
}