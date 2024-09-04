 // vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  ellipseMode(CENTER)
  textSize(23);
  
  let seconds = Math.floor(counter / 60); // divides the counter by the amount of times it ticks per second

  textSize(30);
text(seconds + " seconds", canvasWidth * 0.1, canvasHeight * 0.1);

// if (seconds < 12){ //32


// }  
if (seconds < 5) { //thirthen scene 139
  let rectanglesize = map (other, 0, 20, 40, 90)
  rect (200, 650, rectanglesize, rectanglesize)
  rect (400, 650, rectanglesize, rectanglesize)
  rect (600, 650, rectanglesize, rectanglesize)
  rect (800, 650, rectanglesize, rectanglesize)
  rect (1000,650, rectanglesize, rectanglesize)


//   // first row of circles - 'second scene'
// }  else if (seconds < 16) { 
//   let circlesize = map (other, 0, 20, 4, 50)
//   ellipse (200, 600, circlesize, circlesize)
//   ellipse (400, 600, circlesize, circlesize)
//   ellipse (600, 600, circlesize, circlesize)
//   ellipse (800, 600, circlesize, circlesize)
//   ellipse (1000,600, circlesize, circlesize)

}  else if (seconds < 10) { 
// top flower 'first scene'
let circlesize = map (vocal, 0, 120, 40, 390)
ellipse (220, 190, circlesize, circlesize)
ellipse (335, 90, circlesize, circlesize)
ellipse (420, 390, circlesize, circlesize)
ellipse (270, 350, circlesize, circlesize)
ellipse (540, 300, circlesize, circlesize)
ellipse (510, 125, circlesize, circlesize)
ellipse (390, 240, circlesize, circlesize) //middle circle

// let line = map (drum, 0, 12, 40, 39)
// line(390, 240, 390, drum) //frist clock hand
// line (390, 240, 390, drum) //second clock hand


}  else if (seconds < 50) { 
//top flower (main flower) 'third scene repeated'
let circlesize = map (drum, 0, 120, 40, 390)
ellipse (220, 190, circlesize, circlesize)
ellipse (335, 90, circlesize, circlesize)
ellipse (420, 390, circlesize, circlesize)
ellipse (270, 350, circlesize, circlesize)
ellipse (540, 300, circlesize, circlesize)
ellipse (510, 125, circlesize, circlesize)
ellipse (390, 240, circlesize, circlesize)




// second row of circles - 'fourth scene'
}  else if (seconds < 50) { 
let circlesize = map (other, 0, 20, 4, 50)
ellipse (200, 350, circlesize, circlesize)
ellipse (400, 350, circlesize, circlesize)
ellipse (600, 350, circlesize, circlesize)
ellipse (800, 350, circlesize, circlesize)
ellipse (1000,350, circlesize, circlesize)
ellipse (100, 750, circlesize, circlesize)
ellipse (300, 750, circlesize, circlesize)
ellipse (500, 750, circlesize, circlesize)
ellipse (700, 750, circlesize, circlesize)
ellipse (900, 750, circlesize, circlesize)
ellipse (1100, 750, circlesize, circlesize)



} else if (seconds < 40) {//70
// fifth scene (lots of dots scene)
let circlesize = map (other, 0, 25, 4, 20)
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

} else if (seconds < 55) {//70
// sixth scene (lots of dots scene)
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



} else if (seconds < 60) {//
 // top flower 'first scene'
let circlesize = map (vocal, 0, 120, 40, 390)
ellipse (220, 190, circlesize, circlesize)
ellipse (335, 90, circlesize, circlesize)
ellipse (420, 390, circlesize, circlesize)
ellipse (270, 350, circlesize, circlesize)
ellipse (540, 300, circlesize, circlesize)
ellipse (510, 125, circlesize, circlesize)
ellipse (390, 240, circlesize, circlesize)



}  else if (seconds < 25) { 
//top flower (main flower) 'third scene repeated'
let circlesize = map (drum, 0, 120, 40, 390)
ellipse (220, 190, circlesize, circlesize)
ellipse (335, 90, circlesize, circlesize)
ellipse (420, 390, circlesize, circlesize)
ellipse (270, 350, circlesize, circlesize)
ellipse (540, 300, circlesize, circlesize)
ellipse (510, 125, circlesize, circlesize)
ellipse (390, 240, circlesize, circlesize)


// second row of circles - 'fourth scene'
}  else if (seconds < 30) { 
let circlesize = map (other, 0, 20, 4, 50)
ellipse (200, 350, circlesize, circlesize)
ellipse (400, 350, circlesize, circlesize)
ellipse (600, 350, circlesize, circlesize)
ellipse (800, 350, circlesize, circlesize)
ellipse (1000,350, circlesize, circlesize)
ellipse (100, 750, circlesize, circlesize)
ellipse (300, 750, circlesize, circlesize)
ellipse (500, 750, circlesize, circlesize)
ellipse (700, 750, circlesize, circlesize)
ellipse (900, 750, circlesize, circlesize)
ellipse (1100, 750, circlesize, circlesize)



} else if (seconds < 40) {//70
// fifth scene (lots of dots scene)
let circlesize = map (other, 0, 25, 4, 20)
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

}  else if (seconds < 65) { //eighth scene
  ellipse (200, 200, 200, 200)
  ellipse (500, 200, 200, 200)
  
  let eyeSize = map (drum, 0, 100, 70, 220)
  ellipse (200, 200, eyeSize, eyeSize)
  ellipse (500, 200, eyeSize, eyeSize)
  
  let mouthSize = map (drum, 0, 100, 60, 350)
  rect (350, 500, 200, mouthSize)
  

}  else if (seconds < 70) { //ninth
  let circlesize = map (other, 0, 20, 4, 50)
  ellipse (200, 350, circlesize, circlesize)
  ellipse (400, 350, circlesize, circlesize)
  ellipse (600, 350, circlesize, circlesize)
  ellipse (800, 350, circlesize, circlesize)
  ellipse (1000,350, circlesize, circlesize)


}  else if (seconds < 101) { 
 //top flower (main flower) 'tenth scene repeated'
let circlesize = map (drum, 0, 120, 40, 390)
ellipse (220, 190, circlesize, circlesize)
ellipse (335, 90, circlesize, circlesize)
ellipse (420, 390, circlesize, circlesize)
ellipse (270, 350, circlesize, circlesize)
ellipse (540, 300, circlesize, circlesize)
ellipse (510, 125, circlesize, circlesize)
ellipse (390, 240, circlesize, circlesize)


}  else if (seconds < 115) { // changes on passion (heart)

let circlesize = map (vocal, 0, 40, 45, 90) 
//last (eleventh) scene
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
  

} else if (seconds < 128) {
  background(235, 52, 82)
  //top flower (main flower) 'twelveth  scene '
 let circlesize = map (drum, 0, 120, 40, 390)
 ellipse (220, 190, circlesize, circlesize)
 ellipse (335, 90, circlesize, circlesize)
 ellipse (420, 390, circlesize, circlesize)
 ellipse (270, 350, circlesize, circlesize)
 ellipse (540, 300, circlesize, circlesize)
 ellipse (510, 125, circlesize, circlesize)
 ellipse (390, 240, circlesize, circlesize)


}  else if (seconds < 139) { //thirthen scene
    let rectanglesize = map (other, 0, 20, 40, 70)
    rect (200, 650, rectanglesize, rectanglesize)
    rect (400, 650, rectanglesize, rectanglesize)
    rect (600, 650, rectanglesize, rectanglesize)
    rect (800, 650, rectanglesize, rectanglesize)
    rect (1000,650, rectanglesize, rectanglesize)



} else if (seconds < 145) { //fourthen scene
  let circlesize = map (other, 0, 20, 4, 35)
  ellipse (200, 350, circlesize, circlesize)
  ellipse (400, 350, circlesize, circlesize)
  ellipse (600, 350, circlesize, circlesize)
  ellipse (800, 350, circlesize, circlesize)
  ellipse (1000,350, circlesize, circlesize) //disappear when it says dissappear off screen 


}}

