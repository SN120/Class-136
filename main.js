var video = "";
var status = "";

function preload(){
    video = createVideo("video.mp4");
    video.hide();
}

function setup(){
    canvas = createCanvas(340, 260);
    canvas.center();
}

function draw(){
    image(video, 0, 0, 340, 260);

}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    video.loop();
    video.speed(1);
    video.volume(0);
    status = true;
    console.log("Model Loaded!");
}