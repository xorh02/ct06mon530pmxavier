// write your codes here

//type in the two basic function
function setup(){
  createCanvas(400,400);
  background(220);
}
function draw(){
    for(let i=0; i <5;i++){
      //fill(0) = black fill(255) = white
      //fill(red,green ,blue) 
        fill(0,0 + i*25,0);
      //circle (x position , y position , diameter);
        circle(30 + i*30 ,30+i*30, 30);
    }


}