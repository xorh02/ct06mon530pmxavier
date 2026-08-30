//draw shape
function setup(){
    createCanvas(600,400);
    background(0); //0 is black 255 is white
}
function draw(){
   fill(0);
    stroke(255,0,0);//change outline color
    strokeWeight(10);
    //triangle 6 parameters
    triangle(260,240,300,160,340,240);
    //circle 3 parameter x,y,d
    circle(150,200,80);
    //square
    rect(410,160,80,80);
}

//draw circle with forloop
function setup(){
    createCanvas(600,400);
    background(220);
}
function draw(){
    for( let i =0; i<10; i++){
        fill(0 +i*50);
        circle(30*i+20,30 +i*20,20);
    }   

}

/*revision notes
css -> cascading style sheet
heading in html -> h1 to h7

*/
