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



}


// function draw_one_frame(words, vocal, drum, bass, other, counter) {
//   colorMode (HSB, 100);
//   background (255);
//   rectMode (CENTER);
//   strokeWeight (9)
//   //strokeFill(255);

//   var drumMap = map (drum, 0, 100, 5, 70); //parseInt()
// var lengthOfLine = 300;
// var LineStart = 100;
// var lineEnd = LineStart + lengthOfLine;
// stroke (drumMap, 80, 80);

// for (var i =1; i <= drumMap; i ++) {
//  var lineStep = i*40;
//  line(LineStart, lineStep, lineEnd, lineStep);

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


//  }

//  ellipse (12, 390, circlesize, circlesize)
//  ellipse (21, 350, circlesize, circlesize)
//  ellipse (14, 300, circlesize, circlesize)
//  ellipse (11, 125, circlesize, circlesize)
//  ellipse (190, 240, circlesize, circlesize)


// circle (400, 480, 40, 70)
// circle (400, 500, 40, 70)
// circle (400, 520, 40, 70)
// circle (400, 540, 40, 70)
// circle (400, 560, 40, 70)
// circle (400, 580, 40, 70)
// circle (400, 600, 40, 70)
// circle (400, 620, 40, 70)
// circle (400, 640, 40, 70)
// circle (400, 660, 40, 70)
// circle (400, 680, 40, 70)
// circle (400, 700, 40, 70)
// circle (400, 720, 40, 70)
// circle (400, 740, 40, 70)
// circle (400, 760, 40, 70)
// circle (400, 780, 40, 70)
// circle (400, 800, 40, 70)



// var drumMap = map (drum, 0, 100, 5, 70);
// var length0fLine = 300;
// var LineStart = 100;
// var lineEnd = LineStart + lengthOfLine;
// stroke (drumMap, 80, 80); 

// for (var i =1; i <= drumMap; i ++){
//   var lineStep = i*20; 
//   lineEnd(LineStart, lineStep, lineEnd, lineStep);

// }




// ellipse (500, 200, eyeSize, eyeSize)
// ellipse (800, 200, eyeSize, eyeSize)
// ellipse (200, 800, eyeSize, eyeSize)
// ellipse (400, 400, eyeSize, eyeSize)
// ellipse (100, 400, eyeSize, eyeSize)
// ellipse (800, 700, eyeSize, eyeSize)
// ellipse (300, 600, eyeSize, eyeSize)
// ellipse (700, 400, eyeSize, eyeSize)
// ellipse (900, 500, eyeSize, eyeSize)

// let mouthSize = map(vocal, 0,100,60,350)
// ellipse (350, 500, 200, mouthSize)



// let bar_spacing = height / 10;
//    let bar_height = width / 12;
//    let bar_pos_x = width / 2;
 

//    // vocal bar is red
//    fill(200, 0, 0);
//    rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
//    fill(0);
//    text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
//    // drum bar is green
//    fill(0, 200, 0);
//    rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
//    fill(0);
//    text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
//    // bass bar is blue
//    fill(50, 50, 240);
//    rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
//    fill(0);
//    text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
//    // other bar is white
//    fill(200, 200, 200);
//    rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
//    fill(0);
//    text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
//    fill(255, 255, 0);
 
//    // display "words"
//    textAlign(CENTER);
//    textSize(vocal);
//    text(words, width/2, height/3);
// }

 
// let bar_spacing = height / 10;
// let bar_height = width / 12;
// let bar_pos_x = width / 2;

// background(20)
//   textFont('Verdana'); // please use CSS safe fonts
//   rectMode(CENTER)
//   textSize(24);
// // vocal bar is red
// fill(200, 0, 0);
// rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
// fill(0);
// text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);

// // drum bar is green
// fill(0, 200, 0);
// rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
// fill(0);
// text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);

// // bass bar is blue
// fill(50, 50, 240);
// rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
// fill(0);
// text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);

// // other bar is white
// fill(200, 200, 200);
// rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
// fill(0);
// text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
// fill(255, 255, 0);

// // display "words"
// textAlign(CENTER);
// textSize(vocal);
// text(words, width/2, height/3);


 

 




// let img;
// let firstRun = true 

// function draw_one_frame(words, vocal, drum, bass, other, counter) {
// // vocal, drum, bass, and other are volumes ranging from 0 to 100
// let y = 100;

// background ("#fae")
// fill (0)

// for(let i = 1; i < 6; i ++){
//   let loopyY = y * i;

// ellipse( 400, loopyY , 100)

// }

// // vocal, drum, bass, and other are volumes ranging from 0 to 100
// function draw_one_frame(words, vocal, drum, bass, other, counter) {
//   colorMode (HSB, 100);
//   background (255);
//   rectMode (CENTER);
//   strokeWeight (9)
//   //strokeFill(255);

// var drumMap = map (drum, 0, 100, 5, 70); //parseInt()
// var lengthOfLine = 300;
// var LineStart = 100;
// var lineEnd = LineStart + lengthOfLine;
// stroke (drumMap, 80, 80);

// for (var i =1; i <= drumMap; i ++) {
//  var lineStep = i*20;
//  line(LineStart, lineStep, lineEnd, lineStep);

 
// let bar_spacing = height / 10;
// let bar_height = width / 12;
// let bar_pos_x = width / 2;

// background(20)
//   textFont('Verdana'); // please use CSS safe fonts
//   rectMode(CENTER)
//   textSize(24);
// // vocal bar is red
// fill(200, 0, 0);
// rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
// fill(0);
// text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);

// // drum bar is green
// fill(0, 200, 0);
// rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
// fill(0);
// text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);

// // bass bar is blue
// fill(50, 50, 240);
// rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
// fill(0);
// text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);

// // other bar is white
// fill(200, 200, 200);
// rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
// fill(0);
// text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
// fill(255, 255, 0);

// // display "words"
// textAlign(CENTER);
// textSize(vocal);
// text(words, width/2, height/3);