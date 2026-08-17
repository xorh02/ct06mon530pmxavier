// write your codes here
let x = 200;
let y = 200;
function setup(){
    createCanvas(400,400);
    background(220);
}

function draw(){
    rect(x,y,25,25);
    if(keyCode === 38){
        y -=2;
    }else if(keyCode ===40){
        
    }
}