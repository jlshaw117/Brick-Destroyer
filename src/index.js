import Ball from './modules/ball';
import Paddle from './modules/paddle';


document.addEventListener('DOMContentLoaded', () => {

    let canvas = document.getElementById('screen');
    let screen = canvas.getContext('2d');
    let paddle = new Paddle(canvas, 10, 100);
    let ball = new Ball(5, canvas.width / 2, paddle.y - 5);
    let gameStart = false;

    canvas.addEventListener('mousemove', (e) => {
        let mousePos = calculateMousePos(e);
        paddle.x = mousePos.x - (paddle.width / 2);
        if (gameStart === false) {
            ball.x = mousePos.x;
        }
    });

    const calculateMousePos = (e) => {
        let rect = canvas.getBoundingClientRect();
        let root = document.documentElement;
        let mouseX = e.clientX - rect.left - root.scrollLeft;
        let mouseY = e.clientY - rect.top - root.scrollTop;
        return {
            x: mouseX,
            y: mouseY
        };
    };


    canvas.addEventListener('click', () => {
        if (!gameStart) {
            gameStart = true;
            ball.dy = -1;
        }
    });

    function draw() {
        canvas.width = canvas.width;
        ball.draw(screen);
        paddle.draw(screen);

        if (gameStart) {

            if (ball.x + (ball.dx * ball.speed) > canvas.width - ball.radius || ball.x + (ball.dx * ball.speed) < ball.radius) {
                ball.dx = -ball.dx;
            }

            if (ball.y + (ball.dy * ball.speed) < ball.radius) {
                ball.dy = -ball.dy;
            } else if (ball.y + (ball.dy * ball.speed) > paddle.y - ball.radius && ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
                ball.speed += 0.2;
                ball.dy = -ball.dy;
                ball.dx = calculateTraj();
            } else if (ball.y + (ball.dy * ball.speed)> canvas.height - ball.radius) {
                alert("GAME OVER");
                document.location.reload();
            }
    
            ball.x += ball.dx * ball.speed;
            ball.y += ball.dy * ball.speed;
        }

        requestAnimationFrame(draw);
    }

    const calculateTraj = () => {
       let distFromEdgeL = ball.x - paddle.x;
       return (distFromEdgeL / (paddle.width / 2) - 1) * 2;
    };

    
    draw();
});