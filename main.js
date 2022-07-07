noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
video = "";
function setup()
{
video = createCapture(VIDEO);
video.size(560, 150);

canvas = createCanvas(550, 550);
canvas.position(560, 150);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('poseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
{
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = "+ noseX +"noseY = "+ noseY);
    leftWristX = results[0].nose.x;
    rightWristX = results[0].nose.x;
    difference = left(leftWristX - rightWristX);
    console.log("leftWristX = "+ leftWristX +"rightWristX = "+ rightWristX +"difference = "+ difference);
}
}

function draw()
{
 document.getElementById("square_side").innerHTML = "Width and Height of a Square Will Be = "+ difference +"px";
 background('#969A97');
 fill('#F90093');
 stroke('#F90093');
 square(noseX, noseY, difference);
}

