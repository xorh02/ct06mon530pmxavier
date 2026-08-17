// write your codes here
let soundEffect ,bgMusic, staticImage,loseEffect,wineffect;
//create 4 variables
let staticImageX = 0;let staticImageY = 0; let staticSpeed = 5;
let staticSize =50;
let colorr;
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
    colorr = color(173,216,230);
}
function draw(){
   background(colorr);
   image(staticImage,staticImageX,staticImageY,staticSize,staticSize);
    if(keyIsDown(LEFT_ARROW)){
        staticImageX -= staticSpeed;
    }
    if(keyIsDown(RIGHT_ARROW)){
        staticImageX += staticSpeed;
    }
    if(keyIsDown(UP_ARROW)){
        staticImageY -= staticSpeed;
    }
    if(keyIsDown(DOWN_ARROW)){
        staticImageY += staticSpeed;
    }
    if(staticImageX <25 || staticImageX>375 || staticImageY<25||staticImageY>375){
        colorr = color(255,0,0);
    }else{
        colorr = color(173,216,230);
    }
     if(key === '='){
        staticSize +=1;
        staticSize >300? staticSize=300:staticSize<0?staticSize =0:StaticSize
    }
    if(key === '-'){
        staticSize -=1;
        staticSize >300? staticSize=300:staticSize<0?staticSize =0:StaticSize
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
