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
    }else if(keyIsDown(LEFT_ARROW) ){
        x -=2;
    }else if(keyIsDown(RIGHT_ARROW)){
        x +=2;
    }
    constrain(x,0,width);
    constrain(y,0,height);
}