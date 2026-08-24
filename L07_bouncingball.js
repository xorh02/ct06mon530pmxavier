// write your codes here
// let pico , popSound;
// let x = 200;
// let y = 200;
// let picowidth = 100;
// function preload(){
//     pico = loadImage('assets/pico-a.png');
//     popSound = loadSound('assets/pop.mp3');
// }
// function setup(){
//     createCanvas(600,400);
// }
// function draw(){
//     background(220);
//     if(keyIsDown(LEFT_ARROW)){
//         x -=3;
//     }
//     if(keyIsDown(RIGHT_ARROW)){
//         x+=3;
//     }
//     if(keyIsDown(UP_ARROW)){
//         y-=3;
//     }
//     if(keyIsDown(DOWN_ARROW)){
//         y+=3;
//     }
//     image(pico,x,y,picowidth,100);
// }
// function keyPressed(){
//     if(key===  " "){
//         picowidth /=2;
//         popSound.play ();
//     }
// }


//task1 moving balls
// let ballx = 300;
// let bally = 200;
// let ballsize = 30;
// let ballspeedx = 3;
// let ballspeedy = 3;
// let colorchange = false; let trail = false; let r=0; let g=0; let b=255;
// function setup(){
//     createCanvas(600,400);
//     background(220);
// }
// function draw(){
//     noStroke();
//     if(!trail){background(220);}
//     circle(ballx,bally,ballsize);
//     ballx += ballspeedx;
//     bally += ballspeedy;
//     //task 2 condition for edge detection
//     //first if for the left and right
//     if(ballx + (ballsize/2) >= width || ballx - (ballsize/2)<=0){
//         ballspeedx = -ballspeedx;
//         if(colorchange){
//         r = random(255);g = random(255);   b = random(255);
//     }
//     fill(r,g,b);
//     }
//     //second iff for the top and the bottom
//     if(bally + (ballsize/2) > height || bally < ballsize/2){
//         ballspeedy = -ballspeedy;
//        if(colorchange){
//         r = random(255); g = random(255);b = random(255);
//     }
//     fill(r,g,b);
//     }
// }
// function keyPressed(){
//     //task 4 speed control
//     if(keyCode ===UP_ARROW){ ballspeedx *= 1.2; ballspeedy *=1.2;} 
//     else if(keyCode ===DOWN_ARROW){ ballspeedx *= 0.8; ballspeedy *=0.8;}
//     if(key === 'c' || key === 'C'){ colorchange = !colorchange;}
//     if(key === 't' || key === 'T'){ trail = !trail;}
//     if(key === '+'){ ballsize +=5;}
//     if(key === '-'){ ballsize -=5;}
// }

function setup(){
    createCanvas(600,600);
}
















