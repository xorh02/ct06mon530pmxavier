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
        if(key==='+'){ //increase the size
            size+=1;
        }else if(key==='-'){ //decrease the size
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
    if(keyCode === 38){
        fill(255,0,0);
    }else if(keyCode ===40){
        fill(0);
    }else{
        fill(255);
    }
    circle(400,200,100);
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

   console.log("key:",key);
   console.log("keycode:",keyCode);
}
function keyReleased(){
  
}