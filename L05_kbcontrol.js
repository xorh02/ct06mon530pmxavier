// write your codes here
let showcircle = false;
let showtriangle = false;
let showsquare = false;
let size = 100;
function setup(){
    createCanvas(800,400);
}
function draw(){
    background(220);
    if(showcircle){
        if(key==='g'){
            fill(0,255,0);
        }else if(key ==='b'){
            fill(0,0,255);
        }else if(key ==='y'){
            fill(255,255,0);
        }else{
            fill(0);
        }
        if(key==='+'){
            size+=1;
        }else if(key==='-'){
            size -=1;
        }else{
            size =size;
        }
        circle(mouseX,mouseY,size);
    }
    if(showsquare){//do the square part
    }
    if(showtriangle){ //do the triangle part
    }
}
function keyPressed(){
   if(key ==='e'){
    showcircle = !showcircle;
   }
   if(key === 'r'){
     showsquare = !showsquare;
   }
   if(key==='t'){
    showtriangle = !showtriangle;
   }
}
function keyReleased(){
  
}