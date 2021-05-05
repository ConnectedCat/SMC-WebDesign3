const canvas = document.getElementById("Game");
const context = canvas.getContext('2d');

let cPosX = canvas.width/2;
let cPosY = canvas.height/2;
let cVelX = 3.4;
let cVelY = 4.2;
let cRad = 60;

function draw(){
    context.clearRect(0, 0, canvas.width, canvas.height);

    drawCircle();
    moveCircle();

    window.requestAnimationFrame(draw);
}

function drawCircle(){
    context.beginPath();
    context.strokeStyle = "black";
    context.lineWidth = 2;
    context.fillStyle = "teal";
    context.ellipse(cPosX, cPosY, cRad, cRad, 0, 0, 2*Math.PI);
    context.stroke();
    context.fill();
}

function moveCircle(){
    if(cPosX+cRad >= canvas.width || cPosX-cRad <= 0){
        cVelX *= -1;
    }
    if(cPosY+cRad >= canvas.height || cPosY-cRad <= 0){
        cVelY = cVelY * -1;
    }
    cPosX = cPosX + cVelX;
    cPosY = cPosY + cVelY;
}

draw();

canvas.addEventListener("click", function(event){
    let mouseXp = event.pageX - event.target.offsetLeft;
    let mouseYp = event.pageY - event.target.offsetTop;

    let distX = Math.abs(cPosX - mouseXp);
    let distY = Math.abs(cPosY - mouseYp);

    if(distX < cRad && distY < cRad){
        console.log("FIRE!!!!!");
    }
});