// velger her canvas taggen 

var canvas = document.querySelector("canvas");

// her endrer man hvordan den er orientert

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

//farge til rektangler
c.fillStyle = "rgba(255,0,0,0.5)"; //siste tallet der er gjennomsiktighet.
// lag fire rektangler
c.fillRect(50, 50, 100, 650);

c.fillStyle = "rgba(0,0,255,0.5)";
c.fillRect(100, 200, 100, 500);

c.fillStyle = "rgba(0,255,0,0.5)";
c.fillRect(150, 100, 100, 600);

c.fillStyle= "rgba(150,255,150,0.7)"
c.fillRect(200, 300, 100, 400);

//lag en linje:
c.beginPath();
c.moveTo(40,50);
c.lineTo(40,710);

c.strokeStyle = "black";
c.stroke();

c.beginPath
c.moveTo(300,710);
c.lineTo(40,710); // bunnlinja

c.stroke();
// lagt til tekst

// horisontal markeringer
c.beginPath();
c.moveTo(100,715);
c.lineTo(100,705);

c.moveTo(150,715);
c.lineTo(150,705);

c.moveTo(200,715);
c.lineTo(200,705);

// vertikale markeringer

c.beginPath();
c.moveTo(35,600);
c.lineTo(45,600);

c.moveTo(35,500);
c.lineTo(45,500);

c.moveTo(35,400);
c.lineTo(45,400);

c.moveTo(35,300);
c.lineTo(45,300);

c.moveTo(35,200);
c.lineTo(45,200);

c.moveTo(35,100);
c.lineTo(45,100);


c.stroke();


// tekst
c.font = "16px Arial";
c.strokeText("Vedbjørn da", 80, 730);
c.strokeText("Krykkerud da", 180, 730);
c.strokeText("Juul da", 300, 730);

const countdown = () => {
    // legger inn datoen til en dato man kan velge selv med getTime
    const countDate = new Date("December 26, 2021 00:00:00").getTime();
    // henter inn tiden fra nåtid med new Date som ikke er satt til noe
    const now = new Date().getTime();
    // regner på forskjellen på de to. Det er regnet i milisek. Det er derfor 
    const gap = countDate - now;


    // converterer fra milisek til sekund
    const second = 1000;
    // fra sekund til minutt
    const minute = second * 60;
    // fra minutt til time
    const hour = minute * 60;
    // og til slutt til dag
    const day = hour * 24;

    // tar å deler på gap og dag Math.floor tar bort det som er 
    const textDay = Math.floor(gap / day);
    // modulo tar restene av gap / day og deler på time
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector(".day").innerText = textDay
    document.querySelector(".hour").innerText = textHour
    document.querySelector(".minute").innerText = textMinute
    document.querySelector(".second").innerText = textSecond
    

};




setInterval(countdown, 1000);