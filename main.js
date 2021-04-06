function preload(){

}

function setup()
{
    canvas=createCanvas(648,600);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
}

function draw()
{
    fill(255,0,0);
    stroke(255,0,0);
    circle(50,150,70);

    fill(0,0,255);
    stroke(255,0,0);
    rect(80, 145, 300,25);

    fill(255,0,0);
    stroke(255,0,0);
    circle(400,155,70);

    fill(0,0,255);
    stroke(255,0,0);
    rect(35, 185, 25,300);

    fill(0,0,255);
    stroke(255,0,0);
    rect(390, 190, 25,300);


    fill(255,0,0);
    stroke(255,0,0);
    circle(50,500,70);

    fill(0,0,255);
    stroke(255,0,0);
    rect(75, 500, 300,25);

    fill(255,0,0);
    stroke(255,0,0);
    circle(400,500,70);

}
 
function take_snapshot()
{
    save("Snapshot");
}


