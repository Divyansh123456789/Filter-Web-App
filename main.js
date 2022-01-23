function preload(){

}
function setup(){
 canvas = createCanvas(300,250);
 canvas.center();
 video = createCapture(VIDEO);
 video.size(300,300)
 video.hide();
}
function draw(){
    image(video,0,0,300,250);
}
function take_snapshot(){
    save("Filter_web_app.png");

    
}