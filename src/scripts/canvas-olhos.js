let canvas;

function iniciar() {
    var elemento = document.getElementById("canvas");
    canvas = elemento.getContext("2d");
    window.addEventListener("mousemove", animacion);
}

function animacion(evento) {
    canvas.clearRect(0, 0, 800, 600);
    let xraton = evento.clientX;
    let yraton = evento.clientY;
    let xcentro = 220;
    let ycentro = 150;
    let ang = Math.atan2(xraton - xcentro, yraton - ycentro);
    let x = xcentro + Math.round(Math.sin(ang) * 10);
    let y = ycentro + Math.round(Math.cos(ang) * 10);
    canvas.beginPath();
    canvas.arc(xcentro, ycentro, 20, 0, Math.PI * 2, false);
    canvas.moveTo(xcentro + 70, 150);
    canvas.arc(xcentro + 50, 150, 20, 0, Math.PI * 2, false);
    canvas.stroke();
    canvas.beginPath();
    canvas.moveTo(x + 10, y);
    canvas.arc(x, y, 10, 0, Math.PI * 2, false);
    canvas.moveTo(x + 60, y);
    canvas.arc(x + 50, y, 10, 0, Math.PI * 2, false);
    canvas.fill();
}

window.addEventListener("load", iniciar); 