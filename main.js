song = "BELIEVE.mp3";
scoreLeftWrist=0;
rightWristX=0;
rightWristY=0;
leftWristX=0;
leftWristY=0;

function setup()
{
    canvas=createCanvas(600, 500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}
function draw()
{
    image(video, 0, 0, 600, 500);
   
    fill("green");
    stroke("yellow");

if(scoreLeftWrist > 0.2)
{
    circle(leftWristX, leftWristY, 20);
    InNumberleftWristY = Number(leftWristY);
    remove_decimals = floor(InNumberleftWristY);
    volume = remove_decimals / 500;
    document.getElementById("volume").innerHTML = "Volume = " + volume;
    song.setVolume(volume);
    }
}

function preload()
{
    song = loadSound("BELIEVE.mp3");
}
function play()
    {
        song.play();
        song.setVolume(1);
        song.rate(1);
    }
function gotPoses(results)
{
if (results.length > 0)
scoreLeftWrist = results[0].pose.keypoints[9].score;
rightWristX = results[0].pose.rightWristX;
rightWristY = results[0].pose.rightWristY;
console.log("rightWristX=" + rightWristX + "rightWristY=" + rightWristY);

leftWristX = results[0].pose.leftWristX;
leftWristY = results[0].pose.leftWristY;
console.log("leftWristX=" + leftWristX + "leftWristY=" + leftWristY);
}
function pause()
{
    song.pause();
}