function setup() {
    canvas = createCanvas(500, 500);
    canvas.position(560, 150);

    video = createCapture(VIDEO)
    video.size(500, 500);
    poseNet = ml5.poseNet(video, ModelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background("#85858f");
    textSize(difference);
    fill("#5d5a63");

    text('Valentina', 50, 400)

}


function ModelLoaded() {
    console.log("dummy function to trigger the poseNet model")
}

var difference = 0;

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)


        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x


        difference = floor(leftWristX - rightWristX);
    }

}