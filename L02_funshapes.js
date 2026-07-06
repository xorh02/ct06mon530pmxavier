/*
Task 1: Add the setup() function
*/
function setup(){
   createCanvas(600,400);
   background(220);

}

function draw() {
  // Challenge 1: An eye using ellipse() function
  //fill(red,green,blue);
  // ellipse(300,200,300,200);
  // fill(255,0,0);

  // ellipse(300,200,100,200);
  // fill(0,255,0);

  // ellipse(300,200,100,50);
  // fill(0,0,255);
  // Challenge 2: A face using circle() function
  //circle(x,y,diameter)

  // circle(300,200,200);
  // circle(200,100,80);
  // circle(400,100,80);
  // //add in two eyes
  // circle(250,180,40);
  // circle(350,180,40);
  // //add in one mouth
  // ellipse(300,250,80,40);
  // Challenge 3: A house using rect() function
  // rect(300,200,100,50);
  // rect(500,200,100,50,10,25,24,10);
  // rect(100,100,400,400);
  // circle(200,200,50);
  // circle(400,200,50);
  // rect(250,300,100,150);
  // ellipse(320,350,20,50);
  // Challenge 4: A rocketship using triangle() function
  fill (255,150,0)
  triangle(100,200,250,230,10,10);
  // Challenge 5: A square face using quad() function

  // Challenge 6: Add some colours to the drawings in the above challenges

  // Challenge 7: Create a funny Pokemon
  
  fill (255,255,0)//yellow color
  circle (300,200,200)
  fill (0,0,0) //black color
  circle (250,150,20)
  circle (350,150,20)
  fill (255,0,0)//red
  circle (360,200,40)
}