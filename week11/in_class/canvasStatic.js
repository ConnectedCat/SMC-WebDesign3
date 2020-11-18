const canvas = document.getElementById("Game");
const context = canvas.getContext('2d');


context.fillStyle = "rgb(255, 0, 255)";
context.fillRect(20, 20, 200, 100);

context.strokeStyle = "rgb(0, 255, 255)";
context.lineWidth = 10;
context.lineJoin = "round";
context.strokeRect(100, 50, 150, 300);


context.beginPath();
context.strokeStyle = "rgb(255, 255, 0)";
context.fillStyle = "rgba(0, 255, 0, 0.5)";
context.lineWidth = 5;
context.ellipse(300, 300, 150, 150, 0, 0, 2*Math.PI);
context.stroke();
context.fill();