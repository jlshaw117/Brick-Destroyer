import Ball from './modules/ball';
import Paddle from './modules/paddle';
import Brick from './modules/brick';
import * as level from './modules/levels';

document.addEventListener('DOMContentLoaded', () => {

    let canvas = document.getElementById('screen');
    let screen = canvas.getContext('2d');
    let paddle = new Paddle(canvas, 10, 100);
    let ball = new Ball(8, canvas.width / 2, paddle.y - 8);
    let gameStart = false;
    let bricks = [];
    for (let y = 0; y < level.one.length; y++) {
        for (let x = 0; x < level.one[0].length; x++) {
            if (level.one[y][x] > 0) {
                let b = new Brick(x * 40, y * 40, level.one[y][x]);
                bricks.push(b);
            }
        }
    }


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
        paddle.draw(screen);
        bricks.forEach((brick) => brick.draw(screen, 'red'));
        ball.draw(screen);
        

        if (gameStart) {

            ball.collisionWithWall(canvas);
            ball.collisionWithTop();
            ball.collisionWithPaddle(paddle);
            ball.collisionWithGround(canvas);
            bricks.forEach((brick) => ball.collisionWithBrick(brick));
            bricks.forEach((brick, i) => {
                if (brick.value <= 0) bricks.splice(i, 1);
            });
    
            ball.x += ball.dx * ball.speed;
            ball.y += ball.dy * ball.speed;
        }

        requestAnimationFrame(draw);
    }
    

    draw();
});