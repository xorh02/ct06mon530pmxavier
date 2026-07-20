// write your codes here

//type in the two basic function
function setup(){
  new Canvas(400,400);
  background(220);
}
function draw(){
    for(let i=0; i <5;i++){
        fill(0 + i*2);
        circle(30 + i*30,30+i*30,30);
    }


}