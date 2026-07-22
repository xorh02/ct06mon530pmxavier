
function setup() {
    createCanvas(600, 400);
    background(220);
  }

function draw() {
  // Recap 1: Repeating Circles
  
  // Task 1: Colour Gradient    
  fill(23);
  circle(100,100,20);
  for(let i =0;i <10;i++){
    fill(255-(i*50)); //fill(0)->black fill(255) -> white questions wants u to go from white to black from 255 to 0
    rect(50+i*50,100,40,40);

  }
  // Task 2: Colour Loop
  for(let i=0;i<10;i++){
    if(i%2 ===0){
      fill(0);
    }else{
      fill(255);
    }
    //your task add in a line to generate circle
    circle(50+i*50,300,50)
  }
  // Task 3: Row of Circles
  

  // Task 4: Grid of Circles


}