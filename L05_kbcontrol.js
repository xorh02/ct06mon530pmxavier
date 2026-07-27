// write your codes here
let showcircle = false;
let showtriangle = false;
let showsquare = false;
function setup(){
    createCanvas(800,400);
}
function draw(){
    background(220);
    if(showcircle){
        if(key==='b'){

        }else if(key ==='g'){

        }else if(key ==='y'){

        }else{
            circle(mouseX,mouseY,100);
        }
    }
    if(showsquare){

    }
    if(showtriangle){

    }
}
function keyPressed(){
   if(key ==='e'){
    showcircle = !showcircle;
   }
}
function keyReleased(){
  
}