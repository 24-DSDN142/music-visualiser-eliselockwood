 // vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(23);
  
  let seconds = Math.floor(counter / 60); // divides the counter by the amount of times it ticks per second

  textSize(30);
text(seconds + " seconds", canvasWidth * 0.1, canvasHeight * 0.1);

if (seconds < 32){ //32

// top flower 'first scene'
let circlesize = map (vocal, 0, 120, 40, 390)
ellipse (220, 190, circlesize, circlesize)
ellipse (335, 90, circlesize, circlesize)
ellipse (420, 390, circlesize, circlesize)
ellipse (270, 350, circlesize, circlesize)
ellipse (540, 300, circlesize, circlesize)
ellipse (510, 125, circlesize, circlesize)
ellipse (390, 240, circlesize, circlesize)


} else if (seconds < 70) {//70
// second scene 
let circlesize = map (other, 0, 20, 4, 50)
//top row of circles
ellipse (200, 100, circlesize, circlesize) 
ellipse (400, 100, circlesize, circlesize) 
ellipse (600, 100, circlesize, circlesize) 
ellipse (800, 100, circlesize, circlesize) 
ellipse (1000, 100, circlesize, circlesize)
ellipse (1200, 100, circlesize, circlesize)


//second row of circles
ellipse (100, 200, circlesize, circlesize) 
ellipse (300, 200, circlesize, circlesize) 
ellipse (500, 200, circlesize, circlesize) 
ellipse (700, 200, circlesize, circlesize) 
ellipse (900, 200, circlesize, circlesize) 
ellipse (1100, 200, circlesize, circlesize) 
ellipse (1300, 200, circlesize, circlesize)


//third row of circles
ellipse (100, 450, circlesize, circlesize)
ellipse (300, 450, circlesize, circlesize)
ellipse (500, 450, circlesize, circlesize)
ellipse (700, 450, circlesize, circlesize)
ellipse (900, 450, circlesize, circlesize)
ellipse (1100, 450, circlesize, circlesize)
ellipse (1300, 450, circlesize, circlesize)
ellipse (1500, 450, circlesize, circlesize)

//fourth row of circles
ellipse (100, 750, circlesize, circlesize)
ellipse (300, 750, circlesize, circlesize)
ellipse (500, 750, circlesize, circlesize)
ellipse (700, 750, circlesize, circlesize)
ellipse (900, 750, circlesize, circlesize)
ellipse (1100, 750, circlesize, circlesize)


//fifth row of circles
ellipse (100, 990, circlesize, circlesize)
ellipse (300, 990, circlesize, circlesize)
ellipse (500, 990, circlesize, circlesize)
ellipse (700, 990, circlesize, circlesize)
ellipse (900, 990, circlesize, circlesize)
ellipse (1100, 990, circlesize, circlesize)

//sixth row of circles
ellipse (200, 350, circlesize, circlesize)
ellipse (400, 350, circlesize, circlesize)
ellipse (600, 350, circlesize, circlesize)
ellipse (800, 350, circlesize, circlesize)
ellipse (1000,350, circlesize, circlesize)
ellipse (1200,350, circlesize, circlesize)
ellipse (1400,350, circlesize, circlesize)
ellipse (1800,350, circlesize, circlesize)

//seventh row of circles
ellipse (200, 600, circlesize, circlesize)
ellipse (400, 600, circlesize, circlesize)
ellipse (600, 600, circlesize, circlesize)
ellipse (800, 600, circlesize, circlesize)
ellipse (1000,600, circlesize, circlesize)
ellipse (1200,600, circlesize, circlesize)

//eighth row of circles 
ellipse (200, 850, circlesize, circlesize)
ellipse (400, 850, circlesize, circlesize)
ellipse (600, 850, circlesize, circlesize)
ellipse (800, 850, circlesize, circlesize)
ellipse (1000,850, circlesize, circlesize)
ellipse (1200, 850, circlesize, circlesize)
ellipse (1400, 850, circlesize, circlesize)


}  else if (seconds < 100) { 
 //top flower (main flower) 'third scene repeated'
let circlesize = map (drum, 0, 120, 40, 390)
ellipse (220, 190, circlesize, circlesize)
ellipse (335, 90, circlesize, circlesize)
ellipse (420, 390, circlesize, circlesize)
ellipse (270, 350, circlesize, circlesize)
ellipse (540, 300, circlesize, circlesize)
ellipse (510, 125, circlesize, circlesize)
ellipse (390, 240, circlesize, circlesize)


}  else if (seconds < 140) { // changes on passion (heart)

let circlesize = map (other, 0, 40, 45, 60) 
//last (fifth) scene
// heart of circles relating to the last lyrics - passion / symbol heart 

  ellipse (400, 200, circlesize, circlesize) //top circle of heart left
  ellipse (800, 200, circlesize, circlesize) //top circle of heart right
  ellipse (600, 300, circlesize, circlesize) //middle circle/point of heart 
  ellipse (910, 360, circlesize, circlesize) //right middle edge point
  ellipse (310, 360, circlesize, circlesize) //left middle edge point
  ellipse (400, 550, circlesize, circlesize) //left middle medium
  ellipse (500, 700, circlesize, circlesize) //below left middle medium
  ellipse (800, 550, circlesize, circlesize) // right middle medium
  ellipse (700, 700, circlesize, circlesize) //below right middle medium
  ellipse (600, 850, circlesize, circlesize) //bottom of heart circle/point
  

}
}
