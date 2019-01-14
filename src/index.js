import { Ball } from './ball';
import { Paddle } from './paddle';


document.addEventListener('DOMContentLoaded', () => {

    let canvas = document.getElementById('screen');
    let screen = canvas.getContext('2d');
    let paddle = new Paddle(canvas, 10, 100);
    let ball = new Ball(canvas.width / 2, paddle.y - 5);
    let speed = 2;
    let dx = 0;
    let dy = 0;
    let gameStart = false;

    canvas.addEventListener('mousemove', (e) => {
        let mousePos = calculateMousePos(e);
        paddle.x = mousePos.x - (paddle.width / 2);
        if (gameStart === false) {
            ball.x = mousePos.x;
        }
        
        // mousePos = calculateMousePos(e);
    });

    canvas.addEventListener('click', () => {
        if (!gameStart) {
            gameStart = true;
            dy = -1;
        }
    });

    function draw() {
        canvas.width = canvas.width;
        screen.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        screen.fill();
        screen.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);

        if (gameStart) {

            if (ball.x + (dx * speed) > canvas.width - ball.radius || ball.x + (dx * speed) < ball.radius) {
                dx = -dx;
            }
    
            // if (y + (dy * speed) < ballRadius) {
            //     dy = -dy;
            // } 
    
            if (ball.y + (dy * speed) < ball.radius) {
                dy = -dy;
            } else if (ball.y + (dy * speed) > paddle.y - ball.radius && ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
                speed += 0.2;
                dy = -dy;
                dx = calculateTraj();
            } else if (ball.y + (dy * speed)> canvas.height - ball.radius) {
                alert("GAME OVER");
                document.location.reload();
                // clearInterval(interval); // Needed for Chrome to end game
            }
    
            ball.x += dx * speed;
            ball.y += dy * speed;
        }

        

        // ctx.beginPath();
        // ctx.arc(50, 50, 10, 0, Math.PI * 2);
        // ctx.fillStyle = "#0095DD";
        // ctx.fill();
        // ctx.closePath();

        requestAnimationFrame(draw);
    }

    const calculateTraj = () => {
        /*
            paddleX = position of left edge of paddle
            x = ball position on x axis
            paddleWidth = length of paddle
        */
       let distFromEdgeL = ball.x - paddle.x;
       return (distFromEdgeL / (paddle.width / 2) - 1) * 2;
    };

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

    draw();
    // let interval = setInterval(draw, 1000/frames);
});