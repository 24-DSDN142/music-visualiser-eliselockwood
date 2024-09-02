 // vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(23);
  
//top flower 'first scene'
let circlesize = map (vocal, 0, 120, 40, 390)
ellipse (220, 190, circlesize, circlesize)
ellipse (335, 90, circlesize, circlesize)
ellipse (420, 390, circlesize, circlesize)
ellipse (270, 350, circlesize, circlesize)
ellipse (540, 300, circlesize, circlesize)
ellipse (510, 125, circlesize, circlesize)
ellipse (390, 240, circlesize, circlesize)


//second scene want to clear screen then go into page of dots
// let circlesize = map (other, 0, 20, 4, 50)
// //top row of circles
// ellipse (200, 100, circlesize, circlesize) 
// ellipse (400, 100, circlesize, circlesize) 
// ellipse (600, 100, circlesize, circlesize) 
// ellipse (800, 100, circlesize, circlesize) 

// //second row of circles
// ellipse (100, 200, circlesize, circlesize) 
// ellipse (300, 200, circlesize, circlesize) 
// ellipse (500, 200, circlesize, circlesize) 
// ellipse (700, 200, circlesize, circlesize) 
// ellipse (900, 200, circlesize, circlesize) 

// //third row of circles
// ellipse (100, 450, circlesize, circlesize)
// ellipse (300, 450, circlesize, circlesize)
// ellipse (500, 450, circlesize, circlesize)
// ellipse (700, 450, circlesize, circlesize)
// ellipse (900, 450, circlesize, circlesize)

// //fourth row of circles
// ellipse (100, 750, circlesize, circlesize)
// ellipse (300, 750, circlesize, circlesize)
// ellipse (500, 750, circlesize, circlesize)
// ellipse (700, 750, circlesize, circlesize)
// ellipse (900, 750, circlesize, circlesize)

// //fifth row of circles
// ellipse (100, 990, circlesize, circlesize)
// ellipse (300, 990, circlesize, circlesize)
// ellipse (500, 990, circlesize, circlesize)
// ellipse (700, 990, circlesize, circlesize)
// ellipse (900, 990, circlesize, circlesize)

// //sixth row of circles
// ellipse (200, 350, circlesize, circlesize)
// ellipse (400, 350, circlesize, circlesize)
// ellipse (600, 350, circlesize, circlesize)
// ellipse (800, 350, circlesize, circlesize)

// //seventh row of circles
// ellipse (200, 600, circlesize, circlesize)
// ellipse (400, 600, circlesize, circlesize)
// ellipse (600, 600, circlesize, circlesize)
// ellipse (800, 600, circlesize, circlesize)

// //eighth row of circles 
// ellipse (200, 850, circlesize, circlesize)
// ellipse (400, 850, circlesize, circlesize)
// ellipse (600, 850, circlesize, circlesize)
// ellipse (800, 850, circlesize, circlesize)


}
