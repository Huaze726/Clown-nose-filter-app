noseX = "";
noseY = "";
clown_nose = "";
function preload() {
  clown_nose = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotResult);
}

function modelLoaded() {
  console.log("PoseNet Model Initilsed");
}

function draw() {
  image(video, 0, 0, 300, 300);
  // circle(noseX, noseY, 20);
  // fill("red");
  // stroke("red");
  image(clown_nose, noseX, noseY, 30, 30);
}

function gotResult(results) {
  if (results.length > 0) {
    console.log(results);
    noseX = results[0].pose.nose.x-14;
    noseY = results[0].pose.nose.y-9;
    console.log("Nose X = " + noseX);
    console.log("Nose Y = " + noseY);
  }
}

function take_snapshot() {
  save("myfilterimage.png");
}
