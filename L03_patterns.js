function setup() {
    createCanvas(600, 400);
    background(220);
    noLoop(); // Stops continuous drawing
  }
  
function draw() {
  // Recap 1: Repeating Circles
  //how to create a for loop
  let x = 0;
  for(let i=10; i>0; i--){
     fill(i *50);
     rect(50+x*50,100,50,50);
     ++x;
  }
  // Task 1: Colour Gradient

  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles
}