const canvas = document.querySelector('canvas');
// context 그림 그릴때 사용하는 브러쉬 역할
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;

// 사격형을 채우는 함수 단축어
// ctx.fillRect(50, 50, 100, 200);

// 
// ctx.rect(50, 50, 100, 100);
// ctx.stroke();
// ctx.fill();

ctx.rect(50, 50, 100, 100);
ctx.rect(150, 150, 100, 100);
ctx.rect(250, 250, 100, 100);
ctx.fill();

ctx.beginPath();
ctx.rect(350, 350, 100, 100);
ctx.fillStyle = "red";
ctx.fill();