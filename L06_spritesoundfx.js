// write your codes here
let x = 200;
let y = 200;
function setup(){
    createCanvas(400,400);
    background(220);
}

function draw(){
    rect(x,y,25,25);
    if(keyIsDown(UP_ARROW)){
        y -=2;
    }else if(keyIsDown(DOWN_ARROW)){
        y +=2;
    }else if(keyIsDown(DOWN_ARROW) ){
        x -=2;
    }else if(keyCode === 39){
        x +=2;
    }
}