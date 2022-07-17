let canvas;

function iniciar() {
    const elemento = document.getElementById("canvas");
    canvas = elemento.getContext("2d");
    window.addEventListener("mousemove", animacion);
}

function animacion(evento) {
    canvas.clearRect(0, 0, 200, 100);
    let xmouse = evento.clientX;
    let ymouse = evento.clientY;
    let xcentro = 70;
    let ycentro = 70;
    let ang = Math.atan2(xmouse - xcentro, ymouse - ycentro);
    let x = xcentro + Math.round(Math.sin(ang) * 10);
    let y = ycentro + Math.round(Math.cos(ang) * 10);
    canvas.beginPath();
    canvas.arc(xcentro, ycentro, 20, 0, Math.PI * 2, false);
    canvas.moveTo(xcentro + 70, 70);
    canvas.arc(xcentro + 50, 70, 20, 0, Math.PI * 2, false);
    canvas.stroke();
    canvas.beginPath();
    canvas.moveTo(x + 10, y);
    canvas.arc(x, y, 10, 0, Math.PI * 2, false);
    canvas.moveTo(x + 60, y);
    canvas.arc(x + 50, y, 10, 0, Math.PI * 2, false);
    canvas.fill();
}

window.addEventListener("load", iniciar); 