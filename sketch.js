var dim = 4;
var tesseract = [];
var tesseract2 = [];
var binCount;
var rad = 2;
var zoom = 200;
var display = [];
var farZoom = 1;
var rotation = [0,0,0,0,0,0];
var compRotation = [0,0,0,0,0,0];
var inter = [];
var skew1 = 0;
var skew2 = 0;
var screenDist = 2;
var changeAmount = 1;
var level = 1;
var comp_rot = [];
var compDisplay;

function setup(){
  angleMode(DEGREES);
  createCanvas(1600,1600);
  for(var g = 0; g < 16; g++){
    inter.push({x:0,y:0,z:0});
  }
  for(var g = 0; g < 16; g++){
    comp_rot.push({x:0,y:0,z:0});
  }
  for(var count = 0; count < Math.pow(2,dim); count++){
    binCount = count.toString(2)
    while(binCount.length < dim){
      binCount = "0" + binCount;
    }
    binCount = binCount.split("");
    for(j = 0; j < dim; j++){
      binCount[j] = parseInt(binCount[j])
      binCount[j] *= rad;
      binCount[j] -= 1;
    }
    tesseract.push(binCount);
  }
  console.log(tesseract)
}
  
function draw(){
  
  display = [];
  compDisplay = [];

for(var v = 0; v < tesseract.length; v++){
  display.push({x:inter[v].x*zoom+300-inter[v].x*zoom/2, y:inter[v].y*zoom+300-inter[v].y*zoom/2});
}

for(var v = 0; v < tesseract.length; v++){
  compDisplay.push({x:comp_rot[v].x*zoom+300-comp_rot[v].x*zoom/2, y:comp_rot[v].y*zoom+300-comp_rot[v].y*zoom/2});
}


  background(255);
  strokeWeight(5);
  
if(keyIsDown(SHIFT)){
  changeAmount = 5;
} else {
  changeAmount = 1;
}
  if(keyIsDown(81)){
    rotation[0] -= changeAmount;
  } else if(keyIsDown(69)){
    rotation[0] += changeAmount;
  }
  if(keyIsDown(87)){
    rotation[1] += changeAmount;
  } else if(keyIsDown(83)){
    rotation[2] -= changeAmount;
  }
  if(keyIsDown(65)){
    rotation[2] += changeAmount;
  } else if(keyIsDown(68)){
    rotation[2] -= changeAmount;
  }

  if(keyIsDown(85)){
    rotation[3] += changeAmount;
  } else if(keyIsDown(79)){
    rotation[3] -= changeAmount;
  }

  if(keyIsDown(74)){
    rotation[4] += changeAmount;
  } else if(keyIsDown(76)){
    rotation[4] -= changeAmount;
  }
  if(keyIsDown(73)){
    rotation[5] += changeAmount;
  } else if(keyIsDown(75)){
    rotation[5] -= changeAmount;
  }




  rot();
  rot2();
  wireframe();
  wireframe2();
}


function wireframe() {
  stroke(0);
  for(var c = 0; c < 8; c += 4){
    line(display[c+0].x,display[c+0].y,display[c+1].x,display[c+1].y);
    line(display[c+0].x,display[c+0].y,display[c+2].x,display[c+2].y);
    line(display[c+1].x,display[c+1].y,display[c+3].x,display[c+3].y);
    line(display[c+2].x,display[c+2].y,display[c+3].x,display[c+3].y);
  }
  line(display[0].x,display[0].y,display[4].x,display[4].y);
  line(display[1].x,display[1].y,display[5].x,display[5].y);
  line(display[2].x,display[2].y,display[6].x,display[6].y);
  line(display[3].x,display[3].y,display[7].x,display[7].y);

  for(var c = 8; c < 16; c += 4){
    line(display[c+0].x,display[c+0].y,display[c+1].x,display[c+1].y);
    line(display[c+0].x,display[c+0].y,display[c+2].x,display[c+2].y);
    line(display[c+1].x,display[c+1].y,display[c+3].x,display[c+3].y);
    line(display[c+2].x,display[c+2].y,display[c+3].x,display[c+3].y);
  }
  line(display[8].x,display[8].y,display[12].x,display[12].y);
  line(display[9].x,display[9].y,display[13].x,display[13].y);
  line(display[10].x,display[10].y,display[14].x,display[14].y);
  line(display[11].x,display[11].y,display[15].x,display[15].y);

  line(display[0].x,display[0].y,display[8].x,display[8].y);
  line(display[1].x,display[1].y,display[9].x,display[9].y);
  line(display[2].x,display[2].y,display[10].x,display[10].y);
  line(display[3].x,display[3].y,display[11].x,display[11].y);
  line(display[4].x,display[4].y,display[12].x,display[12].y);
  line(display[5].x,display[5].y,display[13].x,display[13].y);
  line(display[6].x,display[6].y,display[14].x,display[14].y);
  line(display[7].x,display[7].y,display[15].x,display[15].y);
}

function wireframe2() {
  stroke(100,100,255,100);
  
  for(var c = 0; c < 8; c += 4){
    line(compDisplay[c+0].x,compDisplay[c+0].y,compDisplay[c+1].x,compDisplay[c+1].y);
    line(compDisplay[c+0].x,compDisplay[c+0].y,compDisplay[c+2].x,compDisplay[c+2].y);
    line(compDisplay[c+1].x,compDisplay[c+1].y,compDisplay[c+3].x,compDisplay[c+3].y);
    line(compDisplay[c+2].x,compDisplay[c+2].y,compDisplay[c+3].x,compDisplay[c+3].y);
  }
  line(compDisplay[0].x,compDisplay[0].y,compDisplay[4].x,compDisplay[4].y);
  line(compDisplay[1].x,compDisplay[1].y,compDisplay[5].x,compDisplay[5].y);
  line(compDisplay[2].x,compDisplay[2].y,compDisplay[6].x,compDisplay[6].y);
  line(compDisplay[3].x,compDisplay[3].y,compDisplay[7].x,compDisplay[7].y);

  for(var c = 8; c < 16; c += 4){
    line(compDisplay[c+0].x,compDisplay[c+0].y,compDisplay[c+1].x,compDisplay[c+1].y);
    line(compDisplay[c+0].x,compDisplay[c+0].y,compDisplay[c+2].x,compDisplay[c+2].y);
    line(compDisplay[c+1].x,compDisplay[c+1].y,compDisplay[c+3].x,compDisplay[c+3].y);
    line(compDisplay[c+2].x,compDisplay[c+2].y,compDisplay[c+3].x,compDisplay[c+3].y);
  }
  line(compDisplay[8].x,compDisplay[8].y,compDisplay[12].x,compDisplay[12].y);
  line(compDisplay[9].x,compDisplay[9].y,compDisplay[13].x,compDisplay[13].y);
  line(compDisplay[10].x,compDisplay[10].y,compDisplay[14].x,compDisplay[14].y);
  line(compDisplay[11].x,compDisplay[11].y,compDisplay[15].x,compDisplay[15].y);

  line(compDisplay[0].x,compDisplay[0].y,compDisplay[8].x,compDisplay[8].y);
  line(compDisplay[1].x,compDisplay[1].y,compDisplay[9].x,compDisplay[9].y);
  line(compDisplay[2].x,compDisplay[2].y,compDisplay[10].x,compDisplay[10].y);
  line(compDisplay[3].x,compDisplay[3].y,compDisplay[11].x,compDisplay[11].y);
  line(compDisplay[4].x,compDisplay[4].y,compDisplay[12].x,compDisplay[12].y);
  line(compDisplay[5].x,compDisplay[5].y,compDisplay[13].x,compDisplay[13].y);
  line(compDisplay[6].x,compDisplay[6].y,compDisplay[14].x,compDisplay[14].y);
  line(compDisplay[7].x,compDisplay[7].y,compDisplay[15].x,compDisplay[15].y);
}

function rot(){
  inter = [];
  var angle1 = rotation[0];
  var angle2 = rotation[1];
  var angle3 = rotation[2];
  var angle4 = rotation[3];
  var angle5 = rotation[4];
  var angle6 = rotation[5];
  for(var f = 0; f < 16; f++){
    inter.push({
      x: ((cos(angle1)) * tesseract[f][3]-(sin(angle1))*tesseract[f][2]),
      y: (sin(angle1)*tesseract[f][3]+cos(angle1)*tesseract[f][2]),
      z: tesseract[f][1],
      w: tesseract[f][0]
    });
  }
  
  for(var f = 0; f < Math.pow(2,dim); f++){
    inter[f].x = ((cos(angle2)) * inter[f].x-(sin(angle2))*inter[f].z)+2;
    inter[f].z = (sin(angle2)*inter[f].x+cos(angle2)*inter[f].z)+2;
  }

  for(var f = 0; f < Math.pow(2,dim); f++){
    inter[f].y = ((cos(angle3)) * inter[f].y-(sin(angle3))*inter[f].z)+2;
    inter[f].z = (sin(angle3)*inter[f].y+cos(angle3)*inter[f].z)+2;
  }

  for(var f = 0; f < Math.pow(2,dim); f++){
    inter[f].x = ((cos(angle4)) * inter[f].x-(sin(angle4))*inter[f].w)+2;
    inter[f].w = (sin(angle4)*inter[f].x+cos(angle4)*inter[f].w)+2;
  }
  for(var f = 0; f < Math.pow(2,dim); f++){
    inter[f].y = ((cos(angle5)) * inter[f].y-(sin(angle5))*inter[f].w)+2;
    inter[f].w = (sin(angle5)*inter[f].y+cos(angle5)*inter[f].w)+2;
  }
  for(var f = 0; f < Math.pow(2,dim); f++){
    inter[f].z = ((cos(angle6)) * inter[f].z-(sin(angle6))*inter[f].w)+2;
    inter[f].w = (sin(angle6)*inter[f].z+cos(angle6)*inter[f].w)+2;
  }
}



function rot2(){
  comp_rot = [];
  var angle11 = 0;
  var angle12 = 0;
  var angle13 = 0;
  var angle14 = 0;
  var angle15 = 0;
  var angle16 = 0;
  for(var f = 0; f < 16; f++){
    comp_rot.push({
      x: ((cos(angle11)) * tesseract[f][3]-(sin(angle11))*tesseract[f][2]),
      y: (sin(angle11)*tesseract[f][3]+cos(angle11)*tesseract[f][2]),
      z: tesseract[f][1],
      w: tesseract[f][0]
    });
  }
  
  for(var f = 0; f < Math.pow(2,dim); f++){
    comp_rot[f].x = ((cos(angle12)) * comp_rot[f].x-(sin(angle12))*comp_rot[f].z)+2;
    comp_rot[f].z = (sin(angle12)*comp_rot[f].x+cos(angle12)*comp_rot[f].z)+2;
  }

  for(var f = 0; f < Math.pow(2,dim); f++){
    comp_rot[f].y = ((cos(angle13)) * comp_rot[f].y-(sin(angle13))*comp_rot[f].z)+2;
    comp_rot[f].z = (sin(angle13)*comp_rot[f].y+cos(angle13)*comp_rot[f].z)+2;
  }

  for(var f = 0; f < Math.pow(2,dim); f++){
    comp_rot[f].x = ((cos(angle14)) * comp_rot[f].x-(sin(angle14))*comp_rot[f].w)+2;
    comp_rot[f].w = (sin(angle14)*comp_rot[f].x+cos(angle14)*comp_rot[f].w)+2;
  }
  for(var f = 0; f < Math.pow(2,dim); f++){
    comp_rot[f].y = ((cos(angle15)) * comp_rot[f].y-(sin(angle15))*comp_rot[f].w)+2;
    comp_rot[f].w = (sin(angle15)*comp_rot[f].y+cos(angle15)*comp_rot[f].w)+2;
  }
  for(var f = 0; f < Math.pow(2,dim); f++){
    comp_rot[f].z = ((cos(angle16)) * comp_rot[f].z-(sin(angle16))*comp_rot[f].w)+2;
    comp_rot[f].w = (sin(angle16)*comp_rot[f].z+cos(angle16)*comp_rot[f].w)+2;
  }
}
