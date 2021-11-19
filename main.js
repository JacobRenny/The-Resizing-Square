var noseX = 0;
var noseY = 0;
var rightWristX = 0;
var leftWristX = 0;
var difference = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log("PoseNet is Initialized!");
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX=" + noseX + "noseY=" + noseY);
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX=" + leftWristX + "rightWristX=" + rightWristX + "difference=" + difference);
    }
}
function draw() {
    background("#A7C7E7");
    fill("#FFC0CB");
    stroke("#FFC0CB");
    textSize(difference);
    text("Jacob", noseX, noseY);
    document.getElementById("square_sides").innerHTML = "Font Size of this text will be =" + difference + "px";
}