function setup() {
    createCanvas(600, 400);
    background(220);
    noLoop(); // Stops continuous drawing
  }
  
function draw() {
  // Recap 1: Repeating Circles
  for(let i=0; i<5;i++) 
  {
  circle(50+i*50,100,50);
    }

  // Task 1: Colour Gradient    
    for(let i=10; i>0; i--){
      fill(i *50);
      rect(50+i*50,100,50,50);
    }
  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles
}