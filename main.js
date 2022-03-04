var nose_x=0;
var nose_y=0;
    function preload(){
        clown=loadImage('https://i.postimg.cc/PxFvYgkv/l1.png')
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded)
poseNet.on('pose',gotPoses)
}

function draw(){
    image(video,0,0,300,300);
//fill("red");
//stroke("red");
//circle(nose_x,nose_y,30,30)
image(clown,nose_x,nose_y,30,30)
}

function take_snapshot(){
    save('myFilterImage.png');
}

function modelLoaded(){
    console.log("model is loaded")
}

function gotPoses(results){
    if(results.length>0){
        console.log (results);
        nose_x=results[0].pose.nose.x+10;
nose_y=results[0].pose.nose.y+20;
        console.log("nose x=" + nose_x)
        console.log("nose y=" + nose_y)
    }
}

