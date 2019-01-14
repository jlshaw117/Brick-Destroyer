import { Ball } from './ball';
import { Paddle } from './paddle';


document.addEventListener('DOMContentLoaded', () => {

    let canvas = document.getElementById('screen');
    let screen = canvas.getContext('2d');
    let paddle = new Paddle(canvas, 10, 100);
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
            ball.dy = -1;
        }
    });

    function draw() {
        canvas.width = canvas.width;
        screen.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        screen.fill();
        screen.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);

        if (gameStart) {

            if (ball.x + (ball.dx * ball.speed) > canvas.width - ball.radius || ball.x + (ball.dx * ball.speed) < ball.radius) {
                ball.dx = -ball.dx;
            }
    
            // if (y + (ball.dy * ball.speed) < ballRadius) {
            //     ball.dy = -ball.dy;
            // } 
    
            if (ball.y + (ball.dy * ball.speed) < ball.radius) {
                ball.dy = -ball.dy;
            } else if (ball.y + (ball.dy * ball.speed) > paddle.y - ball.radius && ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
                ball.speed += 0.2;
                ball.dy = -ball.dy;
                ball.dx = calculateTraj();
            } else if (ball.y + (ball.dy * ball.speed)> canvas.height - ball.radius) {
                alert("GAME OVER");
                document.location.reload();
                // clearInterval(interval); // Needed for Chrome to end game
            }
    
            ball.x += ball.dx * ball.speed;
            ball.y += ball.dy * ball.speed;
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