// write your codes here
let soundEffect ,bgMusic, staticImage,loseEffect;
function preload(){
    soundEffect = loadSound('assets/pop.mp3');
    bgMusic = loadSound('assets/bossaNova.mp3');
    loseEffect = loadSound('assets/DunDunDunnn.mp3');
    staticImage = loadImage('assets/pico-a.png');
}

function setup(){
    createCanvas(400,400);
    bgMusic.loop();
}

function draw(){
   background("lightblue");
   image(staticImage,0,0,110,133);
}

function keyPressed(){
    if(keyCode === 32){
        soundEffect.play();     
    }
    if(keyCode === 38){
        loseEffect.play();
    }
    //play the win sound when press down arrow key
}