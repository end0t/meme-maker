const canvas = document.querySelector('canvas');
// context 그림 그릴때 사용하는 브러쉬 역할
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;

const colors = [
    "#ff3838",
    "#ffb8b8",
    "#c56cf0",
    "#ff9f1a",
    "#fff200",
    "#32ff7e",
    "#7efff5",
    ]

ctx.linewidth = 2;
let x_coord = 0;
let y_coord = 0;

function onClick(evenet) {
    ctx.beginPath();
    ctx.moveTo(x_coord,y_coord);
    ctx.strokeStyle = colors[Math.floor(Math.random()*colors.length)];
    ctx.lineTo(evenet.offsetX, evenet.offsetY,);
    ctx.stroke();
}

function cursor_move(event){
    x_coord = event.offsetX;
    y_coord = event.offsetY;
    ctx.beginPath();
    ctx.arc(x_coord, y_coord, 5, 0, 2*Math.PI);
    ctx.fillStyle = colors[Math.floor(Math.random()*colors.length)];
    ctx.fill();
    console.log("d");
    }

canvas.addEventListener("mousemove", onClick);
canvas.addEventListener("click", cursor_move);