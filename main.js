video="";
status="";
objects=[]; 
function preload(){
    video = createVideo("video.mp4");
}
function setup(){
   
    canvas  = createCanvas(400,400);
    canvas.center();
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML = "Status : Object Detecting";
}
function modelloaded(){
    console.log("model");
    status = true;
    video.speed(1);
    video.volume(1);
}
function draw(){
    image(video,0,0,400,400);
    if(status != ""){
        objectDetector.detect(video,gotResult);
        function gotResult(error,result){
            if(error){
                console.log(error);
            }
            else{
                console.log(result);
                objects = results;
                obj = objects.length;
                for(i=0 ; i<obj; i++){
            
                    document.getElementById("status").innerHTML = "Status : Object Detected";
                    document.getElementById("no.of.obj").innerHTML = obj;

                    percent = floor(objects[i].confidence*100);
                    fill("black");
                    text(object[i].label+" "+percent+"%",objects[i].x,objects[i].y);
                    noFill();
                    stroke("red");
                    rect(objects[i].x,objects[i].y,object[i].width,objects[i].height)
                }
            }
        }
    }
    
}