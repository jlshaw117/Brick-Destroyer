import Paddle from "./paddle";
import Ball from "./ball";
import levels from './levels';
import Brick from "./brick";

class Game {

    constructor(lives = 3) {
        this.lives = lives;
        this.roundStart = false;
        this.score = 0;
        this.canvas = document.getElementById('screen');
        this.screen = this.canvas.getContext('2d');
        this.paddle = new Paddle(this.canvas, 10, 100);
        this.ball = new Ball(this, 15 / 2, this.canvas.width / 2, this.paddle.y - (15 / 2));
        this.bricks = [];
        this.level = 1;
        this.levels = levels;
        // this.currentLevel = this.levels[(this.level - 1) % this.levels.length];
        this.currentLevel = this.levels[1];
    }

    buildLevel() {
        for (let y = 0; y < this.currentLevel.length; y++) {
            for (let x = 0; x < this.currentLevel[0].length; x++) {
                if (this.currentLevel[y][x] > 0) {
                    let brick = new Brick(x * 40, y * 40, this.currentLevel[y][x]);
                    this.bricks.push(brick);
                }
            }
        }
    }

    play() {
        this.buildLevel();
        let game = this;
        this.canvas.addEventListener('click', () => {
            if (!this.roundStart) {
                this.roundStart = true;
                this.ball.dy = -1;
            }
        });

        this.canvas.addEventListener('mousemove', (e) => {
            let mousePos = calculateMousePos(e);
            this.paddle.x = mousePos.x - (this.paddle.width / 2);
            if (this.roundStart === false) {
                this.ball.x = mousePos.x;
            }
        });

        const calculateMousePos = (e) => {
            let rect = this.canvas.getBoundingClientRect();
            let root = document.documentElement;
            let mouseX = e.clientX - rect.left - root.scrollLeft;
            let mouseY = e.clientY - rect.top - root.scrollTop;
            return {
                x: mouseX,
                y: mouseY
            };
        };

        function draw() {
            game.canvas.width = game.canvas.width;
            game.screen.beginPath();
            game.screen.font = '30px sans-serif';
            game.screen.fillStyle = 'white';
            game.screen.fillText(`Level: ${game.level}`, 10, 50);
            game.screen.fillText(`Score: ${game.score}`, game.canvas.width / 2 - 30, 50);
            game.screen.fillText(`Lives: ${game.lives}`, game.canvas.width - 120, 50);
            game.screen.closePath();
            game.paddle.draw(game.screen);
            game.bricks.forEach((brick) => brick.draw(game.screen));
            game.ball.draw(game.screen);
            if (game.bricks.length === 0) {
                cancelAnimationFrame(id);
                alert('You won');
                return;
            }
            
            if (game.roundStart) {
                
                game.ball.collisionWithWall(game.canvas);
                game.ball.collisionWithTop();
                game.ball.collisionWithPaddle(game.paddle);
                game.ball.collisionWithGround(game.canvas);
                if (game.lives === 0){
                    cancelAnimationFrame(id);
                    alert('Game Over');
                    return;
                }
                game.bricks.forEach((brick) => game.ball.collisionWithBrick(brick));
                game.bricks.forEach((brick, i) => {
                    if (brick.value <= 0) game.bricks.splice(i, 1);
                });
                

                game.ball.x += game.ball.dx * game.ball.speed;
                game.ball.y += game.ball.dy * game.ball.speed;
            }

            id = requestAnimationFrame(draw);
        }

        let id = requestAnimationFrame(draw);
    }
}

export default Game;