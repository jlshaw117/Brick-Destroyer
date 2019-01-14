import Ball from './modules/ball';
import Paddle from './modules/paddle';
import * as Util from './utility/util';


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

            ball.collisionWithWall(canvas);
            ball.collisionWithTop();
            ball.collisionWithPaddle(paddle);
            ball.collisionWithGround(canvas);
    
            ball.x += ball.dx * ball.speed;
            ball.y += ball.dy * ball.speed;
        }

        requestAnimationFrame(draw);
    }

    draw();
});