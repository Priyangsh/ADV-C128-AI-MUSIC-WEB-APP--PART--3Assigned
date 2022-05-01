left_wx = 0; 
left_wy= 0;
right_wx = 0;
right_wy = 0;

function setup(){
    canvas = createCanvas(600, 500); 
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 600, 500);
}

song = "";
function preload(){
    song = loadSound("[League_of_Legends]_Warsongs_Piercing_Light_(Mako_Remix)_NCS_)Fanmade.mp3");
}
function play(){
    song.play();
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);

}

function model_loaded(){
    console.log("model is ready");
}
function gotPoses(results){
    if(results.length > 0 ){
        console.log(results);
       left_wx = results[0].pose.leftWrist.x;
       left_wy = results[0].pose.leftWrist.y;

       right_wx = results[0].pose.rightWrist.x;
       right_wy = results[0].pose.rightWrist.y;
    }
}