
var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

//farge til rektangler
c.fillStyle = "rgba(255,0,0,0.5)"; //siste tallet der er gjennomsiktighet.
// lag fire rektangler
c.fillRect(250, 200, 100, 500);
c.fillStyle = "rgba(0,0,255,0.5)";
c.fillRect(300, 150, 100, 500);
c.fillStyle = "rgba(0,255,0,0.5)";
c.fillRect(350, 100, 100, 500);
c.fillStyle= "rgba(200,255,110,0.5)"
c.fillRect(400, 50, 100, 500);

//lag en linje:
c.beginPath();
c.moveTo(500,50);
c.lineTo(100,400);
c.lineTo(500,400)
// lag en farge på linjen
c.strokeStyle = "blue";
c.stroke();
