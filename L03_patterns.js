let colorval =0;
function setup() {
    createCanvas(600, 400);
    background(220);
    noLoop(); // Stops continuous drawing
  }

function draw() {
  // Recap 1: Repeating Circles

  // Task 1: Colour Gradient    
    // for(let i=0; i<4; i++){
    //   if(colorval %2 ===0){
    //     fill(0);
    //   }else{
    //     fill(255);
    //   }
    //   circle(50+i*50,100,50);
    //   colorval +=1;
    // }
  // Task 2: Colour Loop

  // Task 3: Row of Circles
  let diameter = 30;
  let numCircle = 5;
  let totalwidth = numCircle * diameter;
  let startY = diameter/2;
  let startX =  diameter/2;

  for(let row=0;row<numCircle;row++){
    let rowY = startY +(diameter *row); 

    for(let i=0; i<numCircle; i++){
    let x = startX + i * diameter;
    ellipse(x,rowY,diameter,diameter);
    }
    
  }
  // Task 4: Grid of Circles

}