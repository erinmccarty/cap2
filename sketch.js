let angle = 0;
let cam;

let dog;
let cow;
let blob;

let vid1;
let vid2;
let vid3;
let vid4;
let vid5;

//let r = random(1, 2);
//let dia = 300;
//let dia2 = 200;
let growAmount = 2;
let grow = true;


function preload(){
 
  dog = loadImage('dog1.jpeg');
  cow = loadImage('cow1.jpeg');
  
  blob=loadModel('blobtest3.obj');

}

function setup(){
  createCanvas(1000, 800, WEBGL);
  
  cam=createCapture(VIDEO);
  cam.size(1000, 800);
  cam.hide();
  
  //frameRate(24);
  
  
  //VID1
  vid1 = createVideo(
    ['cap21_1.mp4']
  );

  vid1.size(600, 400);
    
  vid1.hide();
  vid1.loop();
  vid1.volume(0);
  
  //VID2
  vid2 = createVideo(
    ['cap26_1.mp4']
  );

  vid2.size(600, 400);
    
  vid2.hide();
  vid2.loop();
  vid2.volume(0);
  
  //VID3
  vid3 = createVideo(
    ['cap23_1.mp4']
  );

  vid3.size(600, 400);
    
  vid3.hide();
  vid3.loop();
  vid3.volume(0);
  
  //VID4
  vid4 = createVideo(
    ['cap24_1.mp4']
  );

  vid4.size(600, 400);
    
  vid4.hide();
  vid4.loop();
  vid4.volume(0);
  
  //VID5
  vid5 = createVideo(
    ['cap25_1.mp4']
  );

  vid5.size(600, 400);
    
  vid5.hide();
  vid5.loop();
  vid5.volume(0);
 
}
  

function draw(){
  
  //WEBSITE BACKGROUND
  background(7, 18, 10);
  
  //let camX = map(mouseX, 0, width*2, -200, 200);
  //let camY = map(0, mouseY, width*2, -200, 200);
  //camera(camX, camY, (height / 2) / tan(PI / 6), camX, 0, 0, 0, 1, 0);
  
  
  let camX = map(mouseX, 0, width, -600, 1000);
  let camY = map(0, mouseY, width*2, -700, 500);
  camera(camX, camY, height , camX, 0, 0, 0, 1, 0);
  
  
  
  //let dx= mouseX/width-2;
  //let dy= mouseX/height-2;
  //let v = createVector(dx, dy, -2);
  //v.div(100);
  
  ambientLight(255);
  //directionalLight(255,0,0,v);

  
  
  
  //for (let i = 0; i < 3; i++) {
  //let r = random(1, 3);
    
    //DOG
    push();
    translate(-200, 0, -800);
    //rotateY(3);
    //rotateY(angle/2);
    rotateX(angle/2);
    rotateY(angle * 0.3);
    rotateZ(angle * 0.2);
  
    //fill(0, 0, 255);
    noStroke();
    ambientMaterial(255);
  
    texture(vid1);
    sphere(170);
    pop();
    
   // if (dia2 > 200) {
   //   grow = false
   // }
   // if (dia2 < 130) {
   //   grow = true
   // }
  
   // if (grow == true) {
   //   dia2 += r
   // } else {
   //   dia2 -= r
   // }
  //}
    
  //line(50, i, 50 + r, i);

  
  /*
  //SELFIE
  push();
  //rotateY(3);
  //rotateY(angle/2);
  rotateX(angle/2);
  rotateY(angle * 0.3);
  rotateZ(angle * 0.2);
  
  //fill(0, 0, 255);
  noStroke();
  ambientMaterial(255);
  
  texture(dog);
  sphere(dia);
  pop();
  
  if (dia > 200) {
    grow = false
  }
  if (dia < 0) {
    grow = true
  }
  
  if (grow == true) {
    dia += r
  } else {
    dia -= r
  }
  
  
  */
  
  
  

  //BLOB
  push();
  noStroke();
  translate(0, 0, 0);
  scale(100);
  
    rotateX(angle/4);
  rotateY(angle * 0.17);
  rotateZ(angle * 0.01);
  texture(cam);
  //sphere(100, 100, 100);
  model(blob);
  pop();
  
  
  
  
  //COW
  push();
  noStroke();
  translate(-900, 0,-100);
    rotateX(angle/2);
  rotateY(angle * 0.3);
  rotateZ(angle * 0.1);
  texture(vid2);
  sphere(150);
  pop();
  
  
  
  
  
  //COW2
  push();
  noStroke();
  translate(-400, 0, 400);
    rotateX(angle);
  rotateY(angle * 0.1);
  rotateZ(angle * 0.01);
  texture(vid3);
  sphere(200);
  pop();
  
  
  
  
  
  
  //COW2
  push();
  noStroke();
  translate(1000, 0, 300);
    rotateX(angle/2);
  rotateY(angle * 0.01);
  rotateZ(angle * 0.2);
  texture(vid4);
  sphere(250);
  pop();
  
  
  
  
  
  
  //COW2
  push();
  noStroke();
  translate(900, 0, -800);
    rotateX(angle/3);
  rotateY(angle * 0.3);
  rotateZ(angle * 0.01);
  texture(vid5);
  sphere(250);
  pop();
  
  
  
  
  
  
  
    angle += 0.03;
}