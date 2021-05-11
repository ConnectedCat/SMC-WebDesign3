const canvas2 = document.getElementById("myGame");
const ctx = canvas2.getContext('2d');

let cWidth = canvas2.width;
let cHeight = canvas2.height;

let cPosX = cWidth/2; //horizontal center
let cPosY = cHeight/2; //vertical center

let cVelX = 2;
let cVelY = 1;

let cRadius = 75;
let ballColor = "rgb(0, 0, 0)";

const redSlider = document.getElementById("redValue");
const greenSlider = document.getElementById("greenValue");
const blueSlider = document.getElementById("blueValue");

let randomColor = function(){
    let randR = Math.random()*255;
    let randG = Math.random()*255;
    let randB = Math.random()*255;

    let colValue = "rgb(" + randR + ", "+ randG +" , " + randB + ")";
    return colValue;
}

let calculateColor = function(){
    let valueR = redSlider.value;
    let valueG = greenSlider.value;
    let valueB = blueSlider.value;

    let colValue = "rgb(" + valueR + ", " + valueG + ", " + valueB + ")";
    ballColor = colValue;
}


function drawFrame(){
   ctx.clearRect(0, 0, cWidth, cHeight);

   // if re-generating every frame:
   // ballColor = randomColor();

    ctx.fillStyle = ballColor; // define as: #FF0CE2 , rgb(255, 128, 35), "wheat"
    ctx.strokeStyle = "darkorange";

    ctx.beginPath();
    ctx.arc(cPosX, cPosY, cRadius, 0, Math.PI*2);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    if(cPosX + cRadius >= cWidth || cPosX - cRadius <= 0) {
        cVelX = cVelX * -1; //reverse the horizontal direction
    }
    if(cPosY + cRadius >= cHeight || cPosY - cRadius <= 0){
        cVelY = cVelY * -1;
    }

    cPosX = cPosX + cVelX; // change position by velocity
    cPosY = cPosY + cVelY; //

    window.requestAnimationFrame(drawFrame);
}

drawFrame();


canvas2.addEventListener("click", function(event){
    //console.log(event);
    let mouseXp = event.pageX - event.target.offsetLeft;
    let mouseYp = event.pageY - event.target.offsetTop;
    //console.log("Mouse X: " + mouseXp + " Mouse Y: " + mouseYp);

    let distX = Math.abs(cPosX - mouseXp);
    let distY = Math.abs(cPosY - mouseYp);

    if(distX < cRadius && distY < cRadius){
        console.log("HIT!!!");
        cVelX = cVelX * 1.5;
        cVelY = cVelY * 1.5;
    }
})

document.getElementById("colorRand").addEventListener("click", function(){
    ballColor = randomColor();
})

redSlider.addEventListener("change", calculateColor);
greenSlider.addEventListener("change", calculateColor);
blueSlider.addEventListener("change", calculateColor);