import Paddle from "./paddle";
import Ball from "./ball";
import {levels, tutorial} from './levels';
import Brick from "./brick";
import PowerUp from './powerups';
import Bullet from "./bullet";

class Game {

    constructor(lives = 3) {
        this.gameOver = document.getElementById('game-over');
        this.stats = this.gameOver.getContext('2d');
        this.lives = lives;
        this.difficulty = 1;
        this.roundStart = false;
        this.score = 0;
        this.canvas = document.getElementById('screen');
        this.screen = this.canvas.getContext('2d');
        this.paddle = new Paddle(this.canvas, 10, 100);
        this.balls = [];
        this.balls.push(new Ball(this, 15 / 2, this.canvas.width / 2, this.paddle.y - (15 / 2)));
        this.bricks = [];
        this.level = 0;
        this.levels = levels;
        this.currentLevel = tutorial;
        this.powerUps = [];
        this.bullets = [];
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

    nextLevel() {
        this.balls = [];
        this.balls.push(new Ball(this, 15 / 2, this.paddle.x + (this.paddle.width / 2), this.paddle.y - (15 / 2)));
        this.roundStart = false;
        this.paddle.catch = true;
        this.paddle.blaster = false;
        this.paddle.reset();
        this.level += 1;
        this.currentLevel = this.levels[(this.level - 1) % this.levels.length];
        this.buildLevel();
        this.difficulty += 0.2;
        this.balls[0].dx = 0;
        this.balls[0].dy = 0;
        this.balls[0].x = this.paddle.x + (this.paddle.width / 2);
        this.balls[0].y = this.paddle.y - this.balls[0].radius;
        this.powerUps = [];
        this.bullets = [];
    }

    resetGame() {
        this.lives = 3;
        this.difficulty = 1;
        this.roundStart = false;
        this.score = 0;
        this.balls = [];
        this.paddle = new Paddle(this.canvas, 10, 100);
        this.balls.push(new Ball(this, 15 / 2, this.canvas.width / 2, this.paddle.y - (15 / 2)));
        this.bricks = [];
        this.level = 0;
        this.levels = levels;
        this.currentLevel = tutorial;
        this.powerUps = [];
        this.bullets = [];
        this.buildLevel();
    }

    play() {
        this.buildLevel();
        let game = this;
        this.canvas.addEventListener('click', () => {
            if (!this.roundStart) {
                this.paddle.catch = false;
                this.roundStart = true;
                this.balls[0].dy = -1;
            }
            if (this.paddle.blaster) {
                this.bullets.push(new Bullet(this.paddle.x, this.paddle.y));
                this.bullets.push(new Bullet(this.paddle.x + this.paddle.width - 12, this.paddle.y));
            }
        });

        this.canvas.addEventListener('mousemove', (e) => {
            let mousePos = calculateMousePos(e);
            this.paddle.x = mousePos.x - (this.paddle.width / 2);
            if (this.roundStart === false) {
                this.balls[0].x = mousePos.x;
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
            game.screen.textAlign = 'center';
            game.screen.fillText(`Score: ${game.score}`, game.canvas.width / 2, 50);
            game.screen.textAlign = 'end';
            game.screen.fillText(`Lives: ${game.lives}`, game.canvas.width - 10, 50);
            game.screen.textAlign = 'center';
            if (game.paddle.blaster && game.paddle.catch) {
                game.screen.fillText('Click to fire blaster and launch ball', game.canvas.width / 2, game.canvas.height - 5);
            } else if (game.paddle.catch) {
                game.screen.fillText('Click to launch ball', game.canvas.width / 2, game.canvas.height - 5);
            } else if (game.paddle.blaster) {
                game.screen.fillText('Click to fire blaster', game.canvas.width / 2, game.canvas.height - 5);
            }

            game.screen.closePath();
            game.bullets.forEach((bullet, i) => {
                game.bricks.forEach(brick => {
                    if ((bullet.x + bullet.width) > brick.x &&
                        bullet.x < brick.x + brick.edge &&
                        bullet.y - (bullet.width / 2) < brick.y + brick.edge) {

                            game.bullets.splice(i, 1);
                            brick.value -= 1;
                            game.score += 1;
                    }
                });
                bullet.draw(game.screen);
                bullet.y += bullet.speed;
            });
            game.balls.forEach(ball => ball.draw(game.screen));
            game.paddle.draw(game.screen);
            game.bricks.forEach((brick) => brick.draw(game.screen));
            if (game.level === 0) {
                game.screen.beginPath();
                game.screen.textAlign = 'center';
                game.screen.font = '30px sans-serif';
                game.screen.fillStyle = 'white';
                game.screen.fillText('Move mouse to control paddle', game.canvas.width / 2, 200);
                game.screen.closePath();
            }
            if (game.bricks.length === 0) {
                game.nextLevel();
            }

            game.powerUps.forEach((power, i) => {
                if (power.checkForCollision(game.paddle, game)) {
                    game.powerUps.splice(i, 1);
                } else {
                    power.draw(game.screen);
                    power.y += power.speed;
                }
            });

            
            
            if (game.roundStart) {
                
                game.balls.forEach((ball, i) =>{
                    ball.collisionWithWall(game.canvas);
                    ball.collisionWithTop();
                    ball.collisionWithPaddle(game.paddle);
                    if (ball.collisionWithGround(game.canvas)) {
                        game.balls.splice(i, 1);
                    }
                });
                if (game.balls.length === 0) {
                    game.lives -= 1;
                    if (game.lives > 0) {
                        game.balls.push(new Ball(game, 15 / 2, game.paddle.x + game.paddle.width / 2, game.paddle.y - (15 / 2)));
                        game.roundStart = false;
                        game.paddle.catch = true;
                    }
                }
                // game.ball.collisionWithWall(game.canvas);
                // game.ball.collisionWithTop();
                // game.ball.collisionWithPaddle(game.paddle);
                // game.ball.collisionWithGround(game.canvas);
                if (game.lives === 0){
                    game.canvas.setAttribute("style", "display: none;");
                    game.gameOver.width = game.gameOver.width;
                    game.stats.beginPath();
                    game.stats.font = '40px sans-serif';
                    game.stats.fillStyle = 'white';
                    game.stats.textAlign = 'center';
                    game.stats.fillText('GAME OVER', game.canvas.width / 2, 100 );
                    game.stats.fillText('LEVEL', game.canvas.width / 2, 200 );
                    game.stats.fillText(`${game.level}`, game.canvas.width / 2, 250 );
                    game.stats.fillText('SCORE', game.canvas.width / 2, 350 );
                    game.stats.fillText(`${game.score}`, game.canvas.width / 2, 400 );
                    game.stats.fillText('Click to start a new game', game.canvas.width / 2, 500 );
                    game.stats.closePath();
                    game.gameOver.setAttribute("style", "display: block");

                    game.gameOver.addEventListener('click', () => {
                        game.canvas.setAttribute('style', 'display: block;');
                        game.gameOver.setAttribute('style', 'display: none;');
                        game.resetGame();
                    });

                }
                game.bricks.forEach((brick) => {
                    game.balls.forEach(ball => ball.collisionWithBrick(brick));
                    // game.ball.collisionWithBrick(brick);
                });
                game.bricks.forEach((brick, i) => {
                    if (brick.value <= 0) {
                        let rand = Math.floor(Math.random() * 100);
                        if (rand <= 20) {
                            let power = new PowerUp(brick.x, brick.y);
                            game.powerUps.push(power);
                        }
                        game.bricks.splice(i, 1);
                    }
                });

                game.balls.forEach(ball => {
                    ball.x += ball.dx * ball.speed;
                    ball.y += ball.dy * ball.speed;
                });
                // game.ball.x += game.ball.dx * game.ball.speed;
                // game.ball.y += game.ball.dy * game.ball.speed;
            }

            id = requestAnimationFrame(draw);
        }

        let id = requestAnimationFrame(draw);

    }
}

export default Game;