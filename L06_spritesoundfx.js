// write your codes here
let soundEffect ,bgMusic, staticImage,loseEffect,wineffect;
//create 4 variables
let staticImageX = 0;
let staticImageY = 0;
let staticSpeed = 5;
function preload(){
    soundEffect = loadSound('assets/pop.mp3');
    bgMusic = loadSound('assets/bossaNova.mp3');
    loseEffect = loadSound('assets/DunDunDunnn.mp3');
    staticImage = loadImage('assets/pico-a.png');
    wineffect = loadSound('assets/Win.mp3');
}
function setup(){
    createCanvas(400,400);
    bgMusic.loop();
}
function draw(){
   background("lightblue");
   image(staticImage,staticImageX,staticImageY,50,50);
    if(keyIsDown(LEFT_ARROW)){
        staticImageX -= staticSpeed;
    }
    if(keyIsDown(RIGHT_ARROW)){
        staticImageX += staticSpeed;
    }
}
function keyPressed(){
    if(keyCode === 32){
        soundEffect.play();     
    }
    if(keyCode === 38){
        loseEffect.play();
    }
   
    //CHALLENGE play the win sound 
    // when press down arrow key
    if(keyCode === 40){
        wineffect.play();
    }
  
} 
